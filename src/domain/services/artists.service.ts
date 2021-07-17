import { ArtistsRepository } from './../../infrastructure/repositories/artist.repository';
import { Injectable } from '@nestjs/common';
import { Artist } from '../interfaces';

@Injectable()
export class ArtistsService {
  constructor(private readonly artistsRepository: ArtistsRepository) {}

  public async getAllArtists(): Promise<Artist[]> {
    return await this.artistsRepository.findAll();
  }
}
