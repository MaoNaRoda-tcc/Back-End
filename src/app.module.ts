import { Module } from '@nestjs/common';
import { ModelosModule } from './modules/Modelos/modelos.module';
import { GaragemModule } from './modules/Garagem/garagem.module';
import { PublicacaoModule } from './modules/Publicacao/publicacao.module';
import { ModificacaoModule } from './modules/Modificacao/modificacao.module';
import { UsuarioModule } from './modules/Usuario/usuario.module';

@Module({
  imports: [ModelosModule, GaragemModule, PublicacaoModule, ModificacaoModule, UsuarioModule],
})
export class AppModule { }
