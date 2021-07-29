import { ArtistRepository } from '../../infrastructure/repositories';
import { Injectable } from '@nestjs/common';
import { Album, Artist } from '../interfaces';

@Injectable()
export class ArtistService {
  constructor(private readonly artistRepository: ArtistRepository) {}

  public async getAllArtists(): Promise<Artist[]> {
    return await this.artistRepository.findAll();
  }

  public async getArtistFromAlbum(album: Album): Promise<Artist> {
    return await this.artistRepository.getFromAlbum(album);
  }
}
