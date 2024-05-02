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
import { CarDto } from './dto/car-dto';

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

  @Post('createCar')
  async createNewCar(
    @Res() res: Response,
    @Body() body: CarDto,
  ): Promise<Response<boolean>> {
    const resp = await this.carService.createCar(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete('deleteCar/:id')
  async deleteEngine(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.carService.deleteCar(Number(id));

    return res.status(HttpStatus.OK).send(resp);
  }

  @Patch('updateCar/:id')
  async updateEngine(
    @Param('id') id: number,
    @Res() res: Response,
    @Body() body: CarDto,
  ): Promise<Response<boolean>> {
    const resp = await this.carService.updateCar(Number(id), body);

    return res.status(HttpStatus.OK).send(resp);
  }
}
