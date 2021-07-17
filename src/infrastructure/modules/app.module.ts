import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { AppController } from 'src/application/controllers/app.controller';
import { ArtistsModule } from 'src/domain/modules/artists.module';
import { HealthModule } from 'src/domain/modules/health.module';
import config from '../config/config';
import databaseConfig from '../config/database.config';
import { AppService } from '../services/app.service';

@Module({
  imports: [
    HealthModule,
    ArtistsModule,
    KnexModule.forRoot({
      config: {
        client: 'sqlite3',
        connection: {
          filename: './db/chinook.db',
        },
      },
    }),
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
