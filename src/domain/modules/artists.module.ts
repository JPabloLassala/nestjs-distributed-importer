import { Module } from '@nestjs/common';
import { ArtistsController } from 'src/application/controllers/artists.controller';
import { ArtistsRepository } from 'src/infrastructure/repositories/artist.repository';
import { ArtistsService } from '../services/artists.service';

@Module({
  imports: [],
  controllers: [ArtistsController],
  providers: [ArtistsService, ArtistsRepository],
  exports: [ArtistsService],
})
export class ArtistsModule {}
