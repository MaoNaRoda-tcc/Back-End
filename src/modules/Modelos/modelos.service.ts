import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ModeloEntity } from './entities/modelo.entity';
import { ModelosData } from './modelos.data';
import { validate } from 'class-validator';
import { ModeloDto } from './dto/modelo-dto';

@Injectable()
export class ModelosService {
  constructor(private readonly data: ModelosData) { }

  async findAllModels(): Promise<ModeloEntity[]> {
    return await this.data.findAllModels()
  }

  async createModel(input: ModeloDto): Promise<Partial<ModeloEntity>> {
    return await this.data.createModel(input)
  }

  async findModelById(id: number): Promise<ModeloEntity> {
    return this.data.findModelById(id);
  }

  async deleteModel(id: number): Promise<boolean> {
    if (id == undefined) {
      throw new HttpException(
        'É necessário enviar um ID',
        HttpStatus.BAD_REQUEST,
      );
    }

    const exists = await this.findModelById(id)

    if (!exists) {
      throw new HttpException(
        'O modelo não existe!',
        HttpStatus.BAD_REQUEST,
      );
    }

    return this.data.deleteModel(id)
  }
}
