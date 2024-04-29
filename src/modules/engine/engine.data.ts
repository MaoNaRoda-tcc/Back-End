import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { EngineEntity } from './entities/engine.entity';

@Injectable()
export class EngineData {
  constructor(private readonly prismaService: PrismaService) {}

  async findEngines(): Promise<EngineEntity[]> {
    return await this.prismaService.$queryRaw<EngineEntity[]>`
    SELECT * FROM engine;`;
  }
}
