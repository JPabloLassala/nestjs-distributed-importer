import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './infrastructure/modules/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = app.get('ConfigService').get('port');
  const envName = app.get('ConfigService').get('env');

  await app.listen(port, () => {
    Logger.log(`Starting Nest at environment: ${envName}`, 'App');
    Logger.log(`HTTP Service is listening at port ${port}`, 'App');
  });
}
bootstrap();
