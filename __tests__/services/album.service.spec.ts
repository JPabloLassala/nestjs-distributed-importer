import { Test, TestingModule } from '@nestjs/testing';
import { KnexModule } from 'nest-knexjs';
import { Artist, Album } from 'src/domain/interfaces';
import { AlbumService } from 'src/domain/services';
import { AlbumRepository } from 'src/infrastructure/repositories';
import { getFakeAlbumArray } from '__tests__/factories/album.factory';
import { getFakeArtistArray } from '__tests__/factories/artist.factory';

describe('AlbumService', () => {
  let albums: Album[];
  let artists: Artist[];
  let artist: Artist;
  let albumService: AlbumService;

  beforeAll(async () => {
    artists = getFakeArtistArray();
    albums = getFakeAlbumArray(artists);
    artist = albums[0].artist;

    const AlbumRepositoryMock = {
      findAll: jest.fn(async () => Promise.resolve(albums)),
      findAlbumsPerArtist: jest.fn(async (artist: Artist) => {
        const albumsResult = albums.filter(
          (album: Album) => album.artist?.id === artist.id,
        );
        return Promise.resolve(albumsResult);
      }),
    };

    const moduleRef: TestingModule = await Test.createTestingModule({
      imports: [KnexModule],
      providers: [
        AlbumService,
        { provide: AlbumRepository, useValue: AlbumRepositoryMock },
      ],
      exports: [AlbumService],
    }).compile();

    albumService = moduleRef.get<AlbumService>(AlbumService);
  });

  describe('Service status', () => {
    it('Product service should be defined', () => {
      expect(albumService).toBeDefined();
    });
  });

  describe('getters', () => {
    it('Should return all albums', async () => {
      const albumsResult = await albumService.getAllAlbums();

      expect(albumsResult).toEqual(albums);
    });

    it('Should return al albums from artist', async () => {
      const albumsExpected = albums.filter(
        (album: Album) => album.artist?.id === artist.id,
      );
      const albumsResult = await albumService.getAlbumsFromArtist(artist);

      expect(albumsResult).toEqual(albumsExpected);
    });

    it('Should return track album');
  });
});
