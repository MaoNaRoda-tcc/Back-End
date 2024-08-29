import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GaragemEntity } from './entities/garagem.entity';
import { PublicacaoData } from './publicacao.data';
import { PublicacaoDto } from './dto/publicacao-dto';

@Injectable()
export class PublicacaoService {
  constructor(private readonly data: PublicacaoData) { }

  async findAllPublications(skip: number, take: number): Promise<Partial<any>[]> {
    return await this.data.findAllPublications({skip, take})
  }

  async createPublication(input: PublicacaoDto): Promise<boolean> {
    return this.data.createPublication(input)
  }

  // async deleteCarFromGarage(placa: string, cpf: string): Promise<boolean> {

  //   const exists = await this.findCarByCpfAndPlate(placa, cpf)

  //   if (!exists) {
  //     throw new HttpException(
  //       'O registro não existe!',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }

  //   return this.data.deleteCarFromGarage(placa)
  // }
}
