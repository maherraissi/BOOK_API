import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Active la validation automatique
  app.useGlobalPipes(new ValidationPipe({ whitelist: true }));

  // Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Book API')
    .setDescription('API de gestion de livres')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // <- Swagger sur /api

  await app.listen(3000);
}
bootstrap();
