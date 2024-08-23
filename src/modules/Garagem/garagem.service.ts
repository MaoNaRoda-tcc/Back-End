import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GaragemEntity } from './entities/garagem.entity';
import { GaragemData } from './garagem.data';
import { GaragemDto } from './dto/garagem-dto';

@Injectable()
export class GaragemService {
  constructor(private readonly data: GaragemData) { }

  async findAllCarsByCpf(cpf: string): Promise<Partial<GaragemEntity>[]> {
    return await this.data.findAllCarsByCpf(cpf)
  }

  async findCarByCpfAndPlate(placa: string, cpf: string): Promise<Partial<GaragemEntity>> {
    return await this.data.findCarByCpfAndPlate(placa, cpf)
  }

  async insertCarInGarage(input: GaragemDto): Promise<Partial<GaragemEntity>> {
    return await this.data.insertCarInGarage(input)
  }

  async deleteCarFromGarage(placa: string, cpf: string): Promise<boolean> {

    const exists = await this.findCarByCpfAndPlate(placa, cpf)

    if (!exists) {
      throw new HttpException(
        'O registro não existe!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.data.deleteCarFromGarage(placa)
  }
}
