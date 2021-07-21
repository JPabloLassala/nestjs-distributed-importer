import { Controller, Get } from '@nestjs/common';
import { Album } from 'src/domain/interfaces/album.interface';
import { AlbumService } from 'src/domain/services';

@Controller('albums')
export class AlbumsController {
  constructor(private readonly albumService: AlbumService) {}

  @Get()
  async getAllAlbums(): Promise<Album[]> {
    return await this.albumService.getAllAlbums();
  }
}
