import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { KnexModule } from 'nest-knexjs';
import { AppController } from 'src/application/controllers/app.controller';
import { AlbumModule, ArtistModule, HealthModule } from 'src/domain/modules';
import config from '../config/config';
import databaseConfig from '../config/database.config';
import { AppService } from '../services/app.service';

@Module({
  imports: [
    HealthModule,
    ArtistModule,
    AlbumModule,
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
