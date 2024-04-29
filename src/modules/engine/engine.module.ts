import { Module } from '@nestjs/common';
import { EngineController } from './engine.controller';
import { EngineService } from './engine.service';
import { EngineData } from './engine.data';
import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [EngineController],
  providers: [EngineService, EngineData],
  imports: [DatabaseModule],
})
export class EngineModule {}
