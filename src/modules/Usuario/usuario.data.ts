import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UsuarioEntity } from './entities/usuario.entity';
import { UsuarioDto } from './dto/usuario-dto';

@Injectable()
export class UsuarioData {
  constructor(private readonly prismaService: PrismaService) { }

  async create(input: UsuarioDto): Promise<boolean> {
    const { email, nome, idade, cpf } = input

    const data = await this.prismaService.dm_usuario.create({
      data: {
        cpf_id: cpf,
        email,
        idade,
        nome
      }
    })

    return !!data
  }

  async update(input: UsuarioDto): Promise<boolean> {
    const { email, nome, idade, cpf } = input

    const data = await this.prismaService.dm_usuario.update({
      where: { cpf_id: cpf },
      data: {
        email,
        idade,
        nome
      }
    })

    return !!data
  }

  find(cpf: string): Promise<Partial<UsuarioEntity>> {
    return this.prismaService.dm_usuario.findFirst({
      where: {
        cpf_id: {
          equals: cpf
        }
      },
      select: {
        cpf_id: true,
        email: true,
        idade: true,
        nome: true
      }
    })
  }

  async delete(cpf: string): Promise<boolean> {
    const data = await this.prismaService.dm_usuario.delete({
      where: {
        cpf_id: cpf
      }
    })

    return !!data
  }
}
