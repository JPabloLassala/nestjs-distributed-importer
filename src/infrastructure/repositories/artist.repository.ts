import { Injectable } from '@nestjs/common';
import { Knex } from 'knex';
import { InjectModel } from 'nest-knexjs';
import { Artist } from 'src/domain/interfaces';

@Injectable()
export class ArtistsRepository {
  constructor(@InjectModel() private readonly knex: Knex) {}

  getBaseQuery(): Knex.QueryBuilder {
    return this.knex.from({ a: 'artists' });
  }

  async findAll(): Promise<Artist[]> {
    const artists = await this.getBaseQuery().select({
      id: 'ArtistId',
      name: 'Name',
    });

    return artists;
  }
}
