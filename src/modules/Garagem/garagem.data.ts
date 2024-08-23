import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GaragemEntity } from './entities/garagem.entity';
import { GaragemDto } from './dto/garagem-dto';

@Injectable()
export class GaragemData {
  constructor(private readonly prismaService: PrismaService) { }

  async findAllCarsByCpf(cpf: string): Promise<Partial<GaragemEntity>[]> {
    return this.prismaService.ft_garagem.findMany({
      where: {
        cpf_id: { equals: cpf }
      },
      select: {
        cpf_id: true,
        placa: true,
        dm_modelos: {
          select: {
            ano: true,
            modelo: true,
            id_modelo: true
          }
        }
      }
    })
  }

  async findCarByCpfAndPlate(placa: string, cpf: string): Promise<Partial<GaragemEntity>> {
    return this.prismaService.ft_garagem.findFirst({
      where: {
        AND: [
          { placa: { equals: placa } },
          { cpf_id: { equals: cpf } }
        ]
      },
      select: {
        cpf_id: true,
        placa: true,
        dm_modelos: {
          select: {
            modelo: true,
            id_modelo: true,
            ano: true
          }
        },
        dm_mod_carro: {
          select: {
            cambio: true,
            escapamento: true,
            externo: true,
            freio: true,
            interno: true,
            motor: true,
            suspensao: true
          }
        }
      }
    })
  }

  async insertCarInGarage(input: GaragemDto): Promise<Partial<GaragemEntity>> {
    return this.prismaService.ft_garagem.create({
      data: {
        placa: input.placa,
        cpf_id: input.cpf,
        id_modelo: input.idModelo,
      },
    })
  }

  async deleteCarFromGarage(placa: string): Promise<boolean> {
    const data = await this.prismaService.ft_garagem.delete({
      where: {
        placa: placa
      }
    })

    return !!data
  }
}
