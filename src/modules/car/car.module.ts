import { Module } from '@nestjs/common';
import { CarController } from './car.controller';
import { CarService } from './car.service';
import { CarData } from './car.data';

import { DatabaseModule } from 'src/database/database.module';
import { EngineModule } from '../engine/engine.module';

@Module({
  controllers: [CarController],
  providers: [CarService, CarData],
  imports: [DatabaseModule, EngineModule],
})
export class CarModule {}
