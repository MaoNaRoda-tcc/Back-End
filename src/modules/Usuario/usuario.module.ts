import { Module } from '@nestjs/common';
import { UsuarioController } from './usuario.controller';
import { UsuarioService } from './usuario.service';
import { UsuarioData } from './usuario.data';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [UsuarioController],
  providers: [UsuarioService, UsuarioData],
  imports: [DatabaseModule],
})
export class UsuarioModule { }
