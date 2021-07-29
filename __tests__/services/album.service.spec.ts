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
  let albumService: AlbumService;

  beforeAll(async () => {
    artists = getFakeArtistArray();
    albums = getFakeAlbumArray(artists);

    const AlbumRepositoryMock = {
      findAll: jest.fn(async () => Promise.resolve(albums)),
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

    it('Should return al albums from artist', () => {});

    it('Should return an album songs', () => {});

    it('Should return all employees', () => {});

    it('Should return genres in band', () => {});

    it('Should return all playlists', () => {});

    it('Should return playlist songs', () => {});

    it('Should list all invoices', () => {});

    it('Should list all invoices from a customer', () => {});
  });
});
