import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestGatewayModule } from './rest-gateway/rest-gateway.module';
import { GatewayModule } from './gateway/gateway.module';
import { ThrottlerGuard, ThrottlerModule } from '@nestjs/throttler';
import { APP_GUARD } from '@nestjs/core';

@Module({
  imports: [
    RestGatewayModule,
    GatewayModule,
    ThrottlerModule.forRoot([
      {
        ttl: 10 * 1000,
        limit: 5,
      },
    ]),
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_GUARD,
      useClass: ThrottlerGuard,
    },
  ],
})
export class AppModule {}
