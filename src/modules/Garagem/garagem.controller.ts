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
import { GaragemService } from './garagem.service';
import { Response } from 'express';
import { GaragemDto } from './dto/garagem-dto';
import { GaragemEntity } from './entities/garagem.entity';

@Controller('garagem')
export class GaragemController {
  constructor(private readonly service: GaragemService) { }

  @Post()
  async insertCarInGarage(
    @Res() res: Response,
    @Body() body: GaragemDto,
  ): Promise<Response<Partial<GaragemEntity>>> {
    const resp = await this.service.insertCarInGarage(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':cpf')
  async findAllCarsByCpf(
    @Param('cpf') cpf: string,
    @Res() res: Response,
  ): Promise<Response<GaragemEntity>> {
    const resp = await this.service.findAllCarsByCpf(cpf);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':cpf/:placa')
  async findCarByCpfAndPlate(
    @Param('cpf') cpf: string,
    @Param('placa') placa: string,
    @Res() res: Response,
  ): Promise<Response<GaragemEntity>> {
    const resp = await this.service.findCarByCpfAndPlate(placa, cpf);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete(':cpf/:placa')
  async deleteModel(
    @Param('cpf') cpf: string,
    @Param('placa') placa: string,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.service.deleteCarFromGarage(placa, cpf);

    return res.status(HttpStatus.OK).send(resp);
  }
}
