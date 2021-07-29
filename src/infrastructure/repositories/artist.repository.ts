import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { Album, Artist } from 'src/domain/interfaces';

@Injectable()
export class ArtistRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  getBaseQuery(): Knex.QueryBuilder {
    return this.knex.from({ a: 'artists' }).select({
      id: 'ArtistId',
      name: 'Name',
    });
  }

  async findAll(): Promise<Artist[]> {
    const artists = await this.getBaseQuery();

    return artists;
  }

  async getFromAlbum(album: Album): Promise<Artist> {
    return await this.getBaseQuery()
      .leftJoin({ alb: 'albums' }, 'alb.ArtistId', 'a.ArtistId')
      .where({
        'alb.id': album.id,
      });
  }
}
