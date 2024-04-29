import { Module } from '@nestjs/common';
import { EngineModule } from './modules/engine/engine.module';

@Module({
  imports: [EngineModule],
})
export class AppModule {}
