import {
  HttpException,
  HttpStatus,
  Injectable,
  ValidationPipe,
} from '@nestjs/common';
import { EngineDto } from './dto/engine-dto';
import { EngineEntity } from './entities/engine.entity';
import { EngineData } from './engine.data';

@Injectable()
export class EngineService {
  constructor(private readonly engineData: EngineData) {}

  async findEngines(): Promise<{ engines: EngineEntity[] }> {
    const resp = await this.engineData.findEngines();

    return {
      engines: resp,
    };
  }
}
