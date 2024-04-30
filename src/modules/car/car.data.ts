import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { CarEntity } from './entities/car.entity';
import { CarEngineEntity } from './entities/car.engine.entity';

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

    return resp;
  }

  // async insertEngine(body: EngineEntity): Promise<boolean> {
  //   await this.prismaService.engine.create({
  //     data: {
  //       name: body.name,
  //       displacement: body.displacement,
  //       horsepower: body.horsepower,
  //       torque: body.torque,
  //     },
  //   });

  //   return true;
  // }

  // async deleteEngine(id: number): Promise<boolean> {
  //   const engine = await this.prismaService.engine.findFirst({
  //     where: { id: id },
  //     select: { id: true },
  //   });

  //   if (!engine)
  //     new HttpException(
  //       'Motor não encontrado, não pode ser deletado',
  //       HttpStatus.NOT_FOUND,
  //     );

  //   await this.prismaService.engine.deleteMany({
  //     where: { id: id },
  //   });

  //   return true;
  // }

  // async updateEngine(id: number, body: EngineEntity): Promise<boolean> {
  //   const { name, displacement, horsepower, torque } = body;

  //   await this.prismaService.engine.update({
  //     where: { id },
  //     data: {
  //       name,
  //       displacement,
  //       horsepower,
  //       torque,
  //     },
  //   });

  //   return true;
  // }
}
