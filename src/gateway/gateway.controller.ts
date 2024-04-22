import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { GatewayService } from './gateway.service';

@Controller('gateway')
export class GatewayController {
  constructor(private readonly gatewayService: GatewayService) {}

  @Post('signin')
  signin(@Body() signInInput: { user: string; password: string }) {
    return this.gatewayService.signInUser(signInInput);
  }

  @Get('hotels')
  async findAllHotels() {
    return this.gatewayService.findAllHotels();
  }

  @Get('users')
  async findAllUsers() {
    return this.gatewayService.findAllUsers();
  }

  @Get('user/:id')
  async findUser(@Param('id') id: string) {
    return this.gatewayService.findUser(id);
  }

  @Get('hotel/:id')
  async findHotel(@Param('id') id: string) {
    return this.gatewayService.findHotel(id);
  }
}
