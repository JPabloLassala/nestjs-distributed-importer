import { Module } from '@nestjs/common';
import { AlbumsController } from 'src/application/controllers';
import { AlbumRepository } from 'src/infrastructure/repositories';
import { AlbumService } from '../services/album.service';

@Module({
  imports: [],
  controllers: [AlbumsController],
  providers: [AlbumService, AlbumRepository],
  exports: [AlbumService],
})
export class AlbumModule {}
