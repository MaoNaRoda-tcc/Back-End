import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModificacaoEntity } from './entities/modificacao.entity';
import { ModificacaoData } from './modificacao.data';
import { ModificacaoDto } from './dto/modificacao-dto';

@Injectable()
export class ModificacaoService {
  constructor(private readonly data: ModificacaoData) { }

  async findAllPublications(skip: number, take: number): Promise<Partial<ModificacaoEntity>[]> {
    return await this.data.findAllPublications({ skip, take })
  }

  async createPublication(input: ModificacaoDto): Promise<boolean> {
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
