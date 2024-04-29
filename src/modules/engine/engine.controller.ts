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
import { EngineService } from './engine.service';
import { EngineEntity } from './entities/engine.entity';
import { Response } from 'express';

@Controller('engine')
export class EngineController {
  constructor(private readonly engineService: EngineService) {}

  @Get()
  async findEngines(@Res() res: Response): Promise<Response<EngineEntity[]>> {
    const resp = await this.engineService.findEngines();
    return res.status(HttpStatus.OK).send(resp);
  }

  @Get(':name')
  async findEngineByName(
    @Param('name') name: string,
    @Res() res: Response,
  ): Promise<Response<EngineEntity>> {
    const resp = await this.engineService.findEngineByName(name);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Post('createEngine')
  async insertNewEngine(
    @Res() res: Response,
    @Body() body: EngineEntity,
  ): Promise<Response<boolean>> {
    const resp = await this.engineService.createEngine(body);
    return res.status(HttpStatus.OK).send(resp);
  }

  @Delete('deleteEngine/:id')
  async deleteEngine(
    @Param('id') id: number,
    @Res() res: Response,
  ): Promise<Response<boolean>> {
    const resp = await this.engineService.deleteEngine(Number(id));

    return res.status(HttpStatus.OK).send(resp);
  }

  @Patch('updateEngine/:id')
  async updateEngine(
    @Param('id') id: number,
    @Res() res: Response,
    @Body() body: EngineEntity,
  ): Promise<Response<boolean>> {
    const resp = await this.engineService.updateEngine(Number(id), body);

    return res.status(HttpStatus.OK).send(resp);
  }
}
