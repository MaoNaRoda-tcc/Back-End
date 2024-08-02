import { Module } from '@nestjs/common';
import { ModelosModule } from './modules/Modelos/modelos.module';

@Module({
  imports: [ModelosModule],
})
export class AppModule { }
