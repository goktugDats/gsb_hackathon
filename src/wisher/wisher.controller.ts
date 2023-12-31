import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { WisherService } from './wisher.service';
import { ApiBody, ApiParam, ApiResponse } from '@nestjs/swagger';
import { WisherCreateDTO, WisherDTO } from './dto/wisher.dto';
import { BrandDTO } from './dto/brand.dto';
import { CheckoutDto } from './dto/checkout.dto';
import { LastWishDto } from './dto/last.wish.dto';

@Controller()
export class WisherController {
  constructor(private readonly wisherService: WisherService) {}
  @Post('wisher/create')
  @ApiBody({ type: WisherCreateDTO })
  createWisher(@Body() wisherDTO: WisherCreateDTO) {
    return this.wisherService.createWisher(wisherDTO);
  }

  @Get('wisher/all')
  getAllWishers() {
    return this.wisherService.getAllWishers();
  }

  @Get('emergency/:id')
  @ApiParam({ name: 'id', type: Number })
  @ApiResponse({ status: 200, description: 'Get wishers by emergency ID.' })
  getWishersByEmergencyId(@Param('id', ParseIntPipe) id: number) {
    return this.wisherService.getWishersByEmergencyId(id);
  }

  @Post('brand/create')
  @ApiBody({ type: BrandDTO })
  async createBrand(@Body() brandDTO: BrandDTO) {
    return await this.wisherService.createBrand(brandDTO);
  }

  @Post('wisher/checkout')
  @ApiBody({ type: CheckoutDto })
  async checkout(@Body() checkoutDto: CheckoutDto) {
    return await this.wisherService.transaction(checkoutDto);
  }

  @Post('wisher/last')
  @ApiBody({ type: LastWishDto })
  async lastWish(@Body() lastWishDto: LastWishDto) {
    try {
      await this.wisherService.createLastWish(lastWishDto);
      return { completed: true };
    } catch (e) {
      console.log(e);
    }
    return { completed: false };
  }
}
