import { Module } from '@nestjs/common';
import { GatewayService } from './gateway.service';
import { GatewayController } from './gateway.controller';
import { GraphQLRequestModule } from '@golevelup/nestjs-graphql-request';

@Module({
  controllers: [GatewayController],
  providers: [GatewayService],
  imports: [
    GraphQLRequestModule.forRoot(GraphQLRequestModule, {
      endpoint: 'http://localhost:3000/graphql',
      options: {
        headers: {
          'content-type': 'application/json',
        },
      },
    }),
  ],
})
export class GatewayModule {}
