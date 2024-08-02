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

  // @Get(':id')
  // async findCarById(
  //   @Param('id') id: number,
  //   @Res() res: Response,
  // ): Promise<Response<CarEntity>> {
  //   const resp = await this.carService.findCarById(Number(id));
  //   return res.status(HttpStatus.OK).send(resp);
  // }

  // @Delete('deleteCar/:id')
  // async deleteEngine(
  //   @Param('id') id: number,
  //   @Res() res: Response,
  // ): Promise<Response<boolean>> {
  //   const resp = await this.carService.deleteCar(Number(id));

  //   return res.status(HttpStatus.OK).send(resp);
  // }

  // @Patch('updateCar/:id')
  // async updateEngine(
  //   @Param('id') id: number,
  //   @Res() res: Response,
  //   @Body() body: CarDto,
  // ): Promise<Response<boolean>> {
  //   const resp = await this.carService.updateCar(Number(id), body);

  //   return res.status(HttpStatus.OK).send(resp);
  // }
}
