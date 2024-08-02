import { Module } from '@nestjs/common';
import { ModelosController } from './modelos.controller';
import { ModelosService } from './modelos.service';
import { ModelosData } from './modelos.data';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ModelosController],
  providers: [ModelosService, ModelosData],
  imports: [DatabaseModule],
})
export class ModelosModule { }
