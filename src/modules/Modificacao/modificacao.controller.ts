import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res,
} from '@nestjs/common';
import { ModificacaoService } from './modificacao.service';
import { Response } from 'express';
import { ModificacaoDto } from './dto/modificacao-dto';
import { ModificacaoEntity } from './entities/modificacao.entity';

@Controller('modificacao')
export class ModificacaoController {
  constructor(private readonly service: ModificacaoService) { }

  @Post()
  async create(
    @Res() res: Response,
    @Body() body: ModificacaoDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.create(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':placa')
  async find(
    @Param('placa') placa: string,
    @Res() res: Response,
  ): Promise<Response<ModificacaoEntity>> {
    const resp = await this.service.find(placa);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete(':placa')
  async delete(
    @Param('placa') placa: string,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.service.delete(placa);

    return res.status(HttpStatus.OK).send(resp);
  }

  @Patch()
  async update(
    @Res() res: Response,
    @Body() body: ModificacaoDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.update(body);
    return res.status(HttpStatus.OK).send(resp);
  }
}
