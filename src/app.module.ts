import { Module } from '@nestjs/common';
import { ModelosModule } from './modules/Modelos/modelos.module';
import { GaragemModule } from './modules/Garagem/garagem.module';
import { PublicacaoModule } from './modules/Publicacao/publicacao.module';

@Module({
  imports: [ModelosModule, GaragemModule, PublicacaoModule],
})
export class AppModule { }
