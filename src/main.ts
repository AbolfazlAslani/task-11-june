import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerConfiguration } from './configs/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  SwaggerConfiguration(app);
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000,()=>{
    console.log(`http://localhost:3000`);
  
  });
}
bootstrap();
