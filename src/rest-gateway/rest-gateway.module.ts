import { Module } from '@nestjs/common';
import { RestGatewayService } from './rest-gateway.service';
import { RestGatewayController } from './rest-gateway.controller';

@Module({
  providers: [RestGatewayService],
  controllers: [RestGatewayController]
})
export class RestGatewayModule {}
