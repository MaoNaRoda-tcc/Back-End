import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { PublicacaoEntity } from './entities/publicacao.entity';
import { PublicacaoDto } from './dto/publicacao-dto';

@Injectable()
export class PublicacaoData {
  constructor(private readonly prismaService: PrismaService) { }

  async createPublication(input: PublicacaoDto): Promise<boolean> {
    const { cpf, foto_url, titulo } = input

    const data = await this.prismaService.publicacao.create({
      data: {
        titulo,
        link_foto: foto_url,
        cpf_id: cpf
      }
    })

    return !!data
  }

  async findAllPublications(data: { skip: number, take: number }): Promise<Partial<PublicacaoEntity>[]> {
    const { skip, take } = data
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

  findPublication(id: number): Promise<Partial<PublicacaoEntity>> {
    return this.prismaService.publicacao.findFirst({
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

    })
  }

  async deletePublication(id: number): Promise<boolean> {
    const data = await this.prismaService.publicacao.delete({
      where: {
        id_publicacao: id
      }
    })

    return !!data
  }
}
