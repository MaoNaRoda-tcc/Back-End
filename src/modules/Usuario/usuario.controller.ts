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
import { UsuarioService } from './usuario.service';
import { Response } from 'express';
import { UsuarioDto } from './dto/usuario-dto';
import { UsuarioEntity } from './entities/usuario.entity';

@Controller('usuario')
export class UsuarioController {
  constructor(private readonly service: UsuarioService) { }

  @Post()
  async create(
    @Res() res: Response,
    @Body() body: UsuarioDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.create(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':cpf')
  async find(
    @Param('cpf') cpf: string,
    @Res() res: Response,
  ): Promise<Response<UsuarioEntity>> {
    const resp = await this.service.find(cpf);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete(':cpf')
  async delete(
    @Param('cpf') cpf: string,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.service.delete(cpf);

    return res.status(HttpStatus.OK).send(resp);
  }

  @Patch()
  async update(
    @Res() res: Response,
    @Body() body: UsuarioDto,
  ): Promise<Response<boolean>> {
    const resp = await this.service.update(body);
    return res.status(HttpStatus.OK).send(resp);
  }
}
