import { Test, TestingModule } from '@nestjs/testing';
import { KnexModule } from 'nest-knexjs';
import { Album, Artist } from 'src/domain/interfaces';
import { ArtistService } from 'src/domain/services';
import { ArtistRepository } from 'src/infrastructure/repositories';
import { getFakeAlbumArray, getFakeArtistArray } from '__tests__/factories';

describe('ArtistService', () => {
  let artists: Artist[];
  let artist: Artist;
  let albums: Album[];
  let album: Album;
  let artistService: ArtistService;

  beforeAll(async () => {
    artists = getFakeArtistArray();
    albums = getFakeAlbumArray(artists);
    [album] = albums;

    const ArtistRepositoryMock = {
      findAll: jest.fn(async () => Promise.resolve(artists)),
      getFromAlbum: jest.fn(async (album) =>
        Promise.resolve(albums.find((a) => a === album).artist),
      ),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [KnexModule],
      providers: [
        ArtistService,
        { provide: ArtistRepository, useValue: ArtistRepositoryMock },
      ],
      exports: [ArtistService],
    }).compile();

    artistService = moduleRef.get<ArtistService>(ArtistService);
  });

  describe('Service status', () => {
    it('Product service should be defined', () => {
      expect(artistService).toBeDefined();
    });
  });

  describe('getters', () => {
    it('Should return all artists', async () => {
      const artistsResult = await artistService.getAllArtists();

      expect(artistsResult).toEqual(artists);
    });

    it('Should return an artist from album', async () => {
      const artistToGet = album.artist;
      const artistResult = await artistService.getArtistFromAlbum(album);

      expect(artistResult).toEqual(artistToGet);
    });
  });
});
