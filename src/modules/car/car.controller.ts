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
import { CarService } from './car.service';
import { CarEntity } from './entities/car.entity';
import { Response } from 'express';

@Controller('car')
export class CarController {
  constructor(private readonly carService: CarService) {}

  @Get()
  async findEngines(@Res() res: Response): Promise<Response<CarEntity[]>> {
    const resp = await this.carService.findCars();
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':id')
  async findCarById(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<CarEntity>> {
    const resp = await this.carService.findCarById(Number(id));
    return res.status(HttpStatus.OK).send(resp);
  }

  // @Post('createCar')
  // async insertNewEngine(
  //   @Res() res: Response,
  //   @Body() body: CarEntity,
  // ): Promise<Response<boolean>> {
  //   const resp = await this.carService.createEngine(body);
  //   return res.status(HttpStatus.OK).send(resp);
  // }

  // @Delete('deleteEngine/:id')
  // async deleteEngine(
  //   @Param('id') id: number,
  //   @Res() res: Response,
  // ): Promise<Response<boolean>> {
  //   const resp = await this.carService.deleteEngine(Number(id));

  //   return res.status(HttpStatus.OK).send(resp);
  // }

  // @Patch('updateEngine/:id')
  // async updateEngine(
  //   @Param('id') id: number,
  //   @Res() res: Response,
  //   @Body() body: EngineEntity,
  // ): Promise<Response<boolean>> {
  //   const resp = await this.carService.updateEngine(Number(id), body);

  //   return res.status(HttpStatus.OK).send(resp);
  // }
}
