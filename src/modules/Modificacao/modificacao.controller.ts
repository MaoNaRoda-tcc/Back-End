import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Query,
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
  async createPublication(
    @Res() res: Response,
    @Body() body: ModificacaoDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.createPublication(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get()
  async findAllPublications(
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
    @Res() res: Response,
  ): Promise<Response<ModificacaoEntity[]>> {
    const resp = await this.service.findAllPublications(Number(skip), Number(take));
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete(':id')
  async deleteModel(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.service.deletePublication(Number(id));

    return res.status(HttpStatus.OK).send(resp);
  }
}
