import {
  HttpException,
  HttpStatus,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';
import { CarDto } from './dto/car-dto';
import { CarEntity } from './entities/car.entity';
import { CarData } from './car.data';
import { CarEngineEntity } from './entities/car.engine.entity';

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

  // async createEngine(body: EngineEntity): Promise<{ engineCreated: boolean }> {
  //   const resp = await this.carData.insertEngine(body);

  //   return {
  //     engineCreated: resp,
  //   };
  // }

  // async deleteEngine(id: number): Promise<{ deleteEngine: boolean }> {
  //   const resp = await this.carData.deleteEngine(id);

  //   return {
  //     deleteEngine: resp,
  //   };
  // }

  // async updateEngine(
  //   id: number,
  //   body: EngineEntity,
  // ): Promise<{ updateEngine: boolean }> {
  //   const resp = await this.carData.updateEngine(id, body);

  //   return {
  //     updateEngine: resp,
  //   };
  // }
}
