import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { Album } from 'src/domain/interfaces/album.interface';

type albumType = {
  id: number;
  title: string;
  artistId: number;
  artistName: string;
};

@Injectable()
export class AlbumRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  getBaseQuery(): Knex.QueryBuilder {
    return this.knex.from({ a: 'albums' });
  }

  async findAll(): Promise<Album[]> {
    const artists = await this.getBaseQuery()
      .select<albumType[]>({
        id: 'AlbumId',
        title: 'Title',
        artistId: 'art.ArtistId',
        artistName: 'art.Name',
      })
      .leftJoin({ art: 'Artists' }, 'art.ArtistId', 'a.AlbumId');

    return artists.map((artistRow) => ({
      id: artistRow.id,
      title: artistRow.title,
      artist: {
        id: artistRow.artistId,
        name: artistRow.artistName,
      },
    }));
  }
}
