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

  async findEngineByName(name: string): Promise<{ engine: EngineEntity }> {
    const resp = await this.engineData.findEngineByName(name);

    return {
      engine: resp,
    };
  }

  async createEngine(body: EngineEntity): Promise<{ engineCreated: boolean }> {
    const resp = await this.engineData.insertEngine(body);

    return {
      engineCreated: resp,
    };
  }

  async deleteEngine(id: number): Promise<{ deleteEngine: boolean }> {
    const resp = await this.engineData.deleteEngine(id);

    return {
      deleteEngine: resp,
    };
  }

  async updateEngine(
    id: number,
    body: EngineEntity,
  ): Promise<{ updateEngine: boolean }> {
    const resp = await this.engineData.updateEngine(id, body);

    return {
      updateEngine: resp,
    };
  }
}
