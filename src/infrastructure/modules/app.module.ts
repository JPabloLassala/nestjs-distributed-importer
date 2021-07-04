import { Module } from '@nestjs/common';
import { AppController } from 'src/application/controllers/app.controller';
import { AppService } from '../services/app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
