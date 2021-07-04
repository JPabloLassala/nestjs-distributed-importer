import { ConfigModule } from '@nestjs/config';
import { Module } from '@nestjs/common';
import config from '../config/config';
import { AppService } from '../services/app.service';
import databaseConfig from '../config/database.config';
import { HealthModule } from 'src/domain/modules/health.module';
import { AppController } from 'src/application/controllers/app.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.local', '.env'],
      isGlobal: true,
      load: [databaseConfig, config],
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
