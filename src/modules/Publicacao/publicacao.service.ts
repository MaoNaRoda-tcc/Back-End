import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PublicacaoEntity } from './entities/publicacao.entity';
import { PublicacaoData } from './publicacao.data';
import { PublicacaoDto } from './dto/publicacao-dto';

@Injectable()
export class PublicacaoService {
  constructor(private readonly data: PublicacaoData) { }

  async findAllPublications(skip: number, take: number): Promise<Partial<PublicacaoEntity>[]> {
    return await this.data.findAllPublications({ skip, take })
  }

  async createPublication(input: PublicacaoDto): Promise<boolean> {
    return this.data.createPublication(input)
  }

  async deletePublication(id: number): Promise<boolean> {

    const exists = await this.data.findPublication(id)

    if (!exists) {
      throw new HttpException(
        'O registro não existe!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.data.deletePublication(id)
  }
}
