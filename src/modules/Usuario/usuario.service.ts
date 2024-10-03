import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioEntity } from './entities/usuario.entity';
import { UsuarioData } from './usuario.data';
import { UsuarioDto } from './dto/usuario-dto';

@Injectable()
export class UsuarioService {
  constructor(private readonly data: UsuarioData) { }

  async create(input: UsuarioDto): Promise<boolean> {
    return this.data.create(input)
  }

  async update(input: UsuarioDto): Promise<boolean> {
    return this.data.update(input)
  }

  async find(cpf: string): Promise<Partial<UsuarioEntity>> {

    return this.data.find(cpf)
  }

  async delete(cpf: string): Promise<boolean> {

    const exists = await this.data.find(cpf)

    if (!exists) {
      throw new HttpException(
        'O usuário não existe!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.data.delete(cpf)
  }
}
