import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { AppService } from './app.service';
import { UtilsService } from './utils/utils.service';

@Controller('api')
export class AppController {
  constructor(private readonly utilsService: UtilsService) { }

  @Post('test')
  async doubleNumber(@Body(new ValidationPipe) body: { num: number }): Promise<number> {
    return this.utilsService.double(body.num);
  }

}
