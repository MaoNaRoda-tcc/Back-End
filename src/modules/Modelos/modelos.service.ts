import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModeloEntity } from './entities/modelo.entity';
import { ModelosData } from './modelos.data';
import { validate } from 'class-validator';
import { ModeloDto } from './dto/modelo-dto';

@Injectable()
export class ModelosService {
  constructor(private readonly data: ModelosData) { }

  async findAllModels(): Promise<ModeloEntity[]> {
    return await this.data.findAllModels()
  }

  async createModel(input: ModeloDto): Promise<Partial<ModeloEntity>> {
    return await this.data.createModel(input)
  }

  // async findCarById(id: number): Promise<{ car: CarEntity }> {
  //   const resp = await this.carData.findCarById(id);

  //   return {
  //     car: resp,
  //   };
  // }

  // async createCar(body: CarDto): Promise<{ carCreated: boolean }> {
  //   await validate(body);

  //   const resp = await this.carData.createCar(body);
  //   return {
  //     carCreated: resp,
  //   };
  // }

  // async deleteCar(id: number): Promise<{ deleteCar: boolean }> {
  //   if (id == undefined) {
  //     throw new HttpException(
  //       'É necessário enviar um ID',
  //       HttpStatus.BAD_REQUEST,
  //     );
  //   }

  //   const resp = await this.carData.deleteCar(id);

  //   return {
  //     deleteCar: resp,
  //   };
  // }

  // async updateCar(id: number, body: CarDto): Promise<{ updateCar: boolean }> {
  //   await validate(body);

  //   const resp = await this.carData.updateCar(id, body);

  //   return {
  //     updateCar: resp,
  //   };
  // }
}
