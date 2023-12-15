import { Body, Controller, Post } from '@nestjs/common';
import { WisherService } from './wisher.service';
import { ApiBody } from '@nestjs/swagger';
import { WisherDTO } from './dto/wisher.dto';

@Controller('wisher')
export class WisherController {
  constructor(private readonly wisherService: WisherService) {}
  @Post('create')
  @ApiBody({ type: WisherDTO })
  createWisher(@Body() wisherDTO: WisherDTO) {
    return this.wisherService.createWisher(wisherDTO);
  }
}
