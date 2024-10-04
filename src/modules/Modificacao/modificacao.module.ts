import { Module } from '@nestjs/common';
import { ModificacaoController } from './modificacao.controller';
import { ModificacaoService } from './modificacao.service';
import { ModificacaoData } from './modificacao.data';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [ModificacaoController],
  providers: [ModificacaoService, ModificacaoData],
  imports: [DatabaseModule],
})
export class ModificacaoModule { }
