import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarEntity } from './entities/car.entity';
import { CarEngineEntity } from './entities/car.engine.entity';
import { EngineDto } from '../engine/dto/engine-dto';
import { CarDto } from './dto/car-dto';

@Injectable()
export class CarData {
  constructor(private readonly prismaService: PrismaService) {}

  async findCars(): Promise<CarEngineEntity[]> {
    return await this.prismaService.$queryRaw<CarEngineEntity[]>`
      SELECT "carModel".id as carId, "carModel".model, "carModel".price, e.id as engineId, e.name as engineName, e.displacement, e.horsepower, e.torque
      FROM "carModel"
      JOIN "engine" e ON "carModel"."engineId"  = e.id;`;
  }

  async findCarById(id: number): Promise<CarEntity> {
    const resp = await this.prismaService.carModel.findFirst({
      where: {
        id,
      },
      select: {
        model: true,
        price: true,
        id: true,
        engine: {
          select: {
            name: true,
            displacement: true,
            horsepower: true,
            torque: true,
            id: true,
          },
        },
      },
    });

    if (!resp) new HttpException('Carro não encontrado!', HttpStatus.NOT_FOUND);

    return resp;
  }

  async createCar(body: CarDto): Promise<boolean> {
    await this.prismaService.carModel.create({
      data: {
        model: body.model,
        engineId: body.engineId,
        price: body.price,
      },
    });

    return true;
  }

  async deleteCar(id: number): Promise<boolean> {
    const car = await this.prismaService.carModel.findFirst({
      where: { id: id },
      select: { id: true },
    });

    if (!car) new HttpException('Carro não encontrado!', HttpStatus.NOT_FOUND);

    await this.prismaService.carModel.deleteMany({
      where: { id: id },
    });

    return true;
  }

  async updateCar(id: number, body: CarDto): Promise<boolean> {
    const { model, price, engineId } = body;

    try {
      await this.prismaService.carModel.update({
        where: { id },
        data: {
          model,
          price,
          engineId: engineId,
        },
      });
    } catch {
      throw new HttpException(
        'Erro ao atualizar o registo',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }

    return true;
  }
}
