import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ModeloEntity } from './entities/modelo.entity';
import { ModeloDto } from './dto/modelo-dto';

@Injectable()
export class ModelosData {
  constructor(private readonly prismaService: PrismaService) { }

  async findAllModels(): Promise<ModeloEntity[]> {
    return this.prismaService.dm_modelos.findMany({
      select: {
        id_modelo: true,
        modelo: true,
        ano: true
      }
    })
  }

  async createModel(input: ModeloDto): Promise<Partial<ModeloEntity>> {
    return this.prismaService.dm_modelos.create({
      data: {
        modelo: input.modelo,
        ano: new Date(input.ano)
      },
      select: {
        id_modelo: true
      }
    })
  }
}
