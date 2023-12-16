import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { TimerService } from './schedule/timer.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly scheduleService: TimerService,
  ) {}

  @Get()
  getHello(): string {
    this.scheduleService.handleInterval();
    return this.appService.getHello();
  }
}
