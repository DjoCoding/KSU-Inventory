import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { GloabalExceptionFilter } from './common/filters/global.exception.filter';
import { ValidationPipe } from '@nestjs/common';
import { ResponseTransformer } from './common/interceptors/response.transformer';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: "http://localhost:5173"
  });

  app.useGlobalInterceptors(
    new ResponseTransformer()
  );

  app.useGlobalPipes(
    new ValidationPipe()
  );

  app.useGlobalFilters(
    new GloabalExceptionFilter()
  );

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
