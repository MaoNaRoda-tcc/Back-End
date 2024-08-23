import { Module } from '@nestjs/common';
import { GaragemController } from './garagem.controller';
import { GaragemService } from './garagem.service';
import { GaragemData } from './garagem.data';

import { DatabaseModule } from 'src/database/database.module';

@Module({
  controllers: [GaragemController],
  providers: [GaragemService, GaragemData],
  imports: [DatabaseModule],
})
export class GaragemModule { }
