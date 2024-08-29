import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { GaragemEntity } from './entities/garagem.entity';
import { PublicacaoDto } from './dto/publicacao-dto';

@Injectable()
export class PublicacaoData {
  constructor(private readonly prismaService: PrismaService) { }

    async createPublication(input: PublicacaoDto): Promise<boolean> {
      const {cpf, foto_url, titulo} = input

    const data = await this.prismaService.publicacao.create({
      data: {
        titulo,
        link_foto: foto_url,
        cpf_id: cpf 
      }
    })

    return !!data
  }

  async findAllPublications(data: {skip: number, take: number}): Promise<Partial<any>[]> {
    const {skip, take} = data
    return this.prismaService.publicacao.findMany({
      select: {
        link_foto: true,
        titulo: true,
        qtd_curtidas: true,
        dm_usuario: {
          select: {
            cpf_id: true,
            nome: true,
          }
        }
      },
      skip,
      take
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
