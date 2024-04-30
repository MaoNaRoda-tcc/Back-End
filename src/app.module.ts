import { Module } from '@nestjs/common';
import { EngineModule } from './modules/engine/engine.module';
import { CarModule } from './modules/car/car.module';

@Module({
  imports: [EngineModule, CarModule],
})
export class AppModule {}
