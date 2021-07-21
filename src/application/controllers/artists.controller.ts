import { ArtistService } from '../../domain/services';
import { Controller, Get } from '@nestjs/common';
import { Artist } from 'src/domain/interfaces';

@Controller('artists')
export class ArtistsController {
  constructor(private readonly artistService: ArtistService) {}

  @Get()
  async getAllArtists(): Promise<Artist[]> {
    return await this.artistService.getAllArtists();
  }
}
