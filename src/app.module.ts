import { Module } from '@nestjs/common';
import { ModelosModule } from './modules/Modelos/modelos.module';
import { GaragemModule } from './modules/Garagem/garagem.module';

@Module({
  imports: [ModelosModule, GaragemModule],
})
export class AppModule { }
