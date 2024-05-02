import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { CarDto } from './dto/car-dto';
import { CarEntity } from './entities/car.entity';
import { CarData } from './car.data';
import { CarEngineEntity } from './entities/car.engine.entity';
import { validate } from 'class-validator';

@Injectable()
export class CarService {
  constructor(private readonly carData: CarData) {}

  async findCars(): Promise<{ cars: CarEntity[] }> {
    const resp: CarEngineEntity[] = await this.carData.findCars();

    return {
      cars: resp.map((car) => ({
        id: car.carid,
        model: car.model,
        price: car.price,
        engine: {
          id: car.engineid,
          name: car.enginename,
          displacement: car.displacement,
          horsepower: car.horsepower,
          torque: car.torque,
        },
      })),
    };
  }

  async findCarById(id: number): Promise<{ car: CarEntity }> {
    const resp = await this.carData.findCarById(id);

    return {
      car: resp,
    };
  }

  async createCar(body: CarDto): Promise<{ carCreated: boolean }> {
    await validate(body);

    const resp = await this.carData.createCar(body);
    return {
      carCreated: resp,
    };
  }

  async deleteCar(id: number): Promise<{ deleteCar: boolean }> {
    if (id == undefined) {
      throw new HttpException(
        'É necessário enviar um ID',
        HttpStatus.BAD_REQUEST,
      );
    }

    const resp = await this.carData.deleteCar(id);

    return {
      deleteCar: resp,
    };
  }

  async updateCar(id: number, body: CarDto): Promise<{ updateCar: boolean }> {
    await validate(body);

    const resp = await this.carData.updateCar(id, body);

    return {
      updateCar: resp,
    };
  }
}
