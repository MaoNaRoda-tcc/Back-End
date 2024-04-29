import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { EngineService } from './engine.service';
import { EngineDto } from './dto/engine-dto';
import { EngineEntity } from './entities/engine.entity';
import { Response } from 'express';

@Controller('engine')
export class EngineController {
  constructor(private readonly engineService: EngineService) {}

  @Get()
  async findProducts(@Res() res: Response): Promise<Response<EngineEntity[]>> {
    const resp = await this.engineService.findEngines();
    return res.status(HttpStatus.OK).send(resp);
  }
}
