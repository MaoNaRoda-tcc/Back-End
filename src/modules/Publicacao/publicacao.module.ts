import { Module } from '@nestjs/common';
import { PublicacaoController } from './publicacao.controller';
import { PublicacaoService } from './publicacao.service';
import { PublicacaoData } from './publicacao.data';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [PublicacaoController],
  providers: [PublicacaoService, PublicacaoData],
  imports: [DatabaseModule],
})
export class PublicacaoModule { }
