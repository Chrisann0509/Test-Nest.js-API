import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UtilsService } from './utils/utils.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, UtilsService],
})
export class AppModule {}
