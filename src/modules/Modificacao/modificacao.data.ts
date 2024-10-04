import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { ModificacaoEntity } from './entities/modificacao.entity';
import { ModificacaoDto } from './dto/modificacao-dto';

@Injectable()
export class ModificacaoData {
  constructor(private readonly prismaService: PrismaService) { }

  async createModification(input: ModificacaoDto): Promise<boolean> {
    const { cambio, escapamento, externo, freio, interno, motor, placa, suspensao } = input

    const data = await this.prismaService.dm_mod_carro.create({
      data: {
        cambio,
        escapamento,
        externo,
        freio,
        interno,
        motor,
        placa,
        suspensao
      }
    })

    return !!data
  }

  async updateModification(input: ModificacaoDto): Promise<boolean> {
    const { cambio, escapamento, externo, freio, interno, motor, placa, suspensao } = input

    const data = await this.prismaService.dm_mod_carro.update({
      where: { placa },
      data: {
        cambio,
        escapamento,
        externo,
        freio,
        interno,
        motor,
        suspensao
      }
    })

    return !!data
  }

  findModification(placa: string): Promise<Partial<ModificacaoEntity>> {
    return this.prismaService.dm_mod_carro.findFirst({
      where: {
        placa: { equals: placa }
      },
      select: {
        cambio: true,
        escapamento: true,
        externo: true,
        freio: true,
        interno: true,
        motor: true,
        placa: true,
        suspensao: true
      }
    })
  }

  async deleteModification(placa: string): Promise<boolean> {
    const data = await this.prismaService.dm_mod_carro.delete({
      where: {
        placa
      }
    })

    return !!data
  }
}
