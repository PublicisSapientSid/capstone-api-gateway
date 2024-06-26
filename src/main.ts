import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import helmet from 'helmet';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(helmet.frameguard({ action: 'deny' }));
  app.enableCors();
  await app.listen(3003);
}
bootstrap();
