import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { getConnection } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    const entities = getConnection().entityMetadatas;
    for (const entity of entities) {
      const repository = await getConnection().getRepository(entity.name);
      await repository.query(
        `TRUNCATE ${entity.tableName} RESTART IDENTITY CASCADE;`,
      );
    }
    await app.close();
  });

  describe('UserModule', () => {
    it('should create a new user', async () => {
      const user = {
        username: 'tester',
      };
      const response = await request(app.getHttpServer())
        .put('/users')
        .send(user);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('username', 'tester');
      expect(response).toEqual(
        expect.objectContaining({
          body: expect.objectContaining({
            id: expect.any(Number),
            username: expect.any(String),
          }),
        }),
      );
    });

    it('should create a second user correctly', async () => {
      const user = {
        username: 'tester2',
      };
      const response = await request(app.getHttpServer())
        .put('/users')
        .send(user);
      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('id');
      expect(response.body).toHaveProperty('username', 'tester2');
      expect(response).toEqual(
        expect.objectContaining({
          body: expect.objectContaining({
            id: expect.any(Number),
            username: expect.any(String),
          }),
        }),
      );
    });

    it('should get all users', async () => {
      await request(app.getHttpServer()).get('/users').expect(200);
      const response = await request(app.getHttpServer()).get('/users');
      // Check if response body have two objects with id and username
      expect(response.body).toEqual(
        expect.arrayContaining([
          expect.objectContaining({
            id: expect.any(Number),
            username: 'tester',
          }),
          expect.objectContaining({
            id: expect.any(Number),
            username: 'tester2',
          }),
        ]),
      );
    });

    it('should get a user by id', async () => {
      const response = await request(app.getHttpServer()).get('/users/1');
      expect(response.body).toEqual(
        expect.objectContaining({
          id: expect.any(Number),
          username: 'tester',
        }),
      );
    });
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
