import { Artist } from './artist.interface';

export interface Album {
  id: number;
  title: string;
  artist: Artist | null;
}
