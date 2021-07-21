import { Module } from '@nestjs/common';
import { ArtistsController } from 'src/application/controllers';
import { ArtistRepository } from 'src/infrastructure/repositories';
import { ArtistService } from '../services';

@Module({
  imports: [],
  controllers: [ArtistsController],
  providers: [ArtistService, ArtistRepository],
  exports: [ArtistService],
})
export class ArtistModule {}
