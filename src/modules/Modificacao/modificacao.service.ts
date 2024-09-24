import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModificacaoEntity } from './entities/modificacao.entity';
import { ModificacaoData } from './modificacao.data';
import { ModificacaoDto } from './dto/modificacao-dto';

@Injectable()
export class ModificacaoService {
  constructor(private readonly data: ModificacaoData) { }

  async create(input: ModificacaoDto): Promise<boolean> {
    return this.data.createModification(input)
  }

  async update(input: ModificacaoDto): Promise<boolean> {
    return this.data.updateModification(input)
  }

  async find(placa: string): Promise<Partial<ModificacaoEntity>> {

    return this.data.findModification(placa)
  }

  async delete(placa: string): Promise<boolean> {

    const exists = await this.data.findModification(placa)

    if (!exists) {
      throw new HttpException(
        'O registro não existe!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.data.deleteModification(placa)
  }
}
