import { Injectable } from '@nestjs/common';
import { AlbumRepository } from 'src/infrastructure/repositories';
import { Album } from '../interfaces/album.interface';

@Injectable()
export class AlbumService {
  constructor(private readonly albumRepository: AlbumRepository) {}

  public async getAllAlbums(): Promise<Album[]> {
    return await this.albumRepository.findAll();
  }

  public asda(): number {
    return 1;
  }
}
