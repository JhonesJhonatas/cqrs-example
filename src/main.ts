import { NestFactory } from '@nestjs/core';

import { AppModule } from '@/app-module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  process.on('uncaughtException', console.error);
  process.on('unhandledRejection', console.error);

  await app.listen(process.env.PORT ?? 3000).then(() => {
    console.log(`🗲 - Running on PORT: ${process.env.PORT}`);
  });
}
void bootstrap();
