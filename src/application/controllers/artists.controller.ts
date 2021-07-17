import { ArtistsService } from './../../domain/services/artists.service';
import { Controller, Get } from '@nestjs/common';
import { Artist } from 'src/domain/interfaces';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistsService: ArtistsService) {}

  @Get()
  async getAllArtists(): Promise<Artist[]> {
    return await this.artistsService.getAllArtists();
  }
}
