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
import { PublicacaoService } from './publicacao.service';
import { Response } from 'express';
import { PublicacaoDto } from './dto/publicacao-dto';
import { PublicacaoEntity } from './entities/publicacao.entity';

@Controller('publicacao')
export class PublicacaoController {
  constructor(private readonly service: PublicacaoService) { }

  @Post()
  async createPublication(
    @Res() res: Response,
    @Body() body: PublicacaoDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.createPublication(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get()
  async findAllPublications(
    @Query('skip') skip: number = 0,
    @Query('take') take: number = 10,
    @Res() res: Response,
  ): Promise<Response<PublicacaoEntity[]>> {
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
