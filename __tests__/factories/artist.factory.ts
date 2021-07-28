import { Artist } from 'src/domain/interfaces';
import * as fakerStatic from 'faker';

const { datatype, commerce, vehicle } = fakerStatic;

export const getFakeArtist = (id = null): Artist => ({
  id: id || datatype.number(),
  name: `${commerce.productAdjective()} ${vehicle.vehicle()}`,
});

export const getFakeArtistArray = (length?: number): Artist[] =>
  [...new Array(length || 200)].map((row, i) => getFakeArtist(i));
