import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import * as request from 'supertest';
import { DatabaseCleaner } from './database-cleaner';

describe('UserController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();

    await app.init();
  });

  beforeEach(async () => {
    await new DatabaseCleaner().cleanup();
  });

  afterEach(async () => {
    await new DatabaseCleaner().cleanup();
  });

  it('#PUT /users should create a new user', async () => {
    const user = {
      username: 'tester',
    };
    const response = await request(app.getHttpServer())
      .put('/users')
      .send(user);
    expect(response.status).toBe(200);
  });

  it('#GET /users should get all users', async () => {
    const user00 = {
      username: 'tester',
    };
    const response00 = await request(app.getHttpServer())
      .put('/users')
      .send(user00);
    expect(response00.status).toBe(200);
    const user0 = {
      username: 'tester2',
    };
    const response0 = await request(app.getHttpServer())
      .put('/users')
      .send(user0);
    expect(response0.status).toBe(200);
    const response = await request(app.getHttpServer()).get('/users');
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        username: expect.any(String),
        workouts: [],
      },
      {
        id: expect.any(Number),
        username: expect.any(String),
        workouts: [],
      },
    ]);
    expect(response.status).toBe(200);
  });

  it('#GET /users/:id should get a user', async () => {
    const user = {
      username: 'tester',
    };
    const response0 = await request(app.getHttpServer())
      .put('/users')
      .send(user);
    const response = await request(app.getHttpServer()).get('/users/1');
    expect(response.body).toEqual({
      id: expect.any(Number),
      username: 'tester',
      workouts: expect.any(Array),
    });
    expect(response.status).toBe(200);
  });

  it('#DELETE /users/:id should delete a user', async () => {
    const user = {
      username: 'tester',
    };
    const response0 = await request(app.getHttpServer())
      .put('/users')
      .send(user);
    const response = await request(app.getHttpServer()).delete('/users/1');
    expect(response.status).toBe(200);
    const checkIfDeleted = await request(app.getHttpServer()).get('/users/1');
    expect(checkIfDeleted.body).toEqual({});
  });

  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
  });
});
