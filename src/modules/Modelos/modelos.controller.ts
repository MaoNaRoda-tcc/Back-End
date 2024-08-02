import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { ModelosService } from './modelos.service';
import { Response } from 'express';
import { ModeloDto } from './dto/modelo-dto';
import { ModeloEntity } from './entities/modelo.entity';

@Controller('modelos')
export class ModelosController {
  constructor(private readonly service: ModelosService) { }

  @Get()
  async findAllModels(@Res() res: Response): Promise<Response<ModeloEntity[]>> {
    const resp = await this.service.findAllModels();
    return res.status(HttpStatus.OK).send(resp);
  }

  @Post()
  async createNewModel(
    @Res() res: Response,
    @Body() body: ModeloDto,
  ): Promise<Response<Partial<ModeloEntity>>> {
    const resp = await this.service.createModel(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':id')
  async findModelById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<ModeloEntity>> {
    const resp = await this.service.findModelById(Number(id));
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete(':id')
  async deleteModel(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.service.deleteModel(Number(id));

    return res.status(HttpStatus.OK).send(resp);
  }
}
