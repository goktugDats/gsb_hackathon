import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ScheduleService } from './schedule/schedule.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private readonly scheduleService: ScheduleService,
  ) {}

  @Get()
  getHello(): string {
    this.scheduleService.handleInterval();
    return this.appService.getHello();
  }
}
