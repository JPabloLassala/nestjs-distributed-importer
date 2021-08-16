import { Album, Artist } from 'src/domain/interfaces';
import * as fakerStatic from 'faker';

const { datatype, lorem } = fakerStatic;

export const getFakeAlbum = (
  id = null,
  artist: Artist | null = null,
): Album => ({
  id: id !== null ? id : datatype.number(),
  title: lorem.sentence(),
  artist: artist || null,
});

export const getFakeAlbumArray = (
  artists: Artist[],
  length?: number,
): Album[] => {
  return [...new Array(length || 200)].map((row, i) => {
    const randomArtist = artists[datatype.number(artists.length)];
    return getFakeAlbum(i, randomArtist);
  });
};
