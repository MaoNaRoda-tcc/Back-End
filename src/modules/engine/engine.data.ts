import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EngineEntity } from './entities/engine.entity';

@Injectable()
export class EngineData {
  constructor(private readonly prismaService: PrismaService) {}

  async findEngines(): Promise<EngineEntity[]> {
    return await this.prismaService.$queryRaw<EngineEntity[]>`
    SELECT * FROM engine;`;
  }

  async findEngineByName(name: string): Promise<EngineEntity> {
    const resp = await this.prismaService.engine.findFirst({
      where: {
        name,
      },
    });
    return await this.prismaService.$queryRaw<EngineEntity>`
    SELECT * FROM engine WHERE name = ${name};`;
  }

  async insertEngine(body: EngineEntity): Promise<boolean> {
    await this.prismaService.engine.create({
      data: {
        name: body.name,
        displacement: body.displacement,
        horsepower: body.horsepower,
        torque: body.torque,
      },
    });

    return true;
  }

  async deleteEngine(id: number): Promise<boolean> {
    const engine = await this.prismaService.engine.findFirst({
      where: { id: id },
      select: { id: true },
    });

    if (!engine)
      new HttpException(
        'Motor não encontrado, não pode ser deletado',
        HttpStatus.NOT_FOUND,
      );

    await this.prismaService.engine.deleteMany({
      where: { id: id },
    });

    return true;
  }

  async updateEngine(id: number, body: EngineEntity): Promise<boolean> {
    const { name, displacement, horsepower, torque } = body;

    await this.prismaService.engine.update({
      where: { id },
      data: {
        name,
        displacement,
        horsepower,
        torque,
      },
    });

    return true;
  }
}
