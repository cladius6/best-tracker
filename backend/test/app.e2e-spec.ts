import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DatabaseCleaner } from './database-cleaner';
import { getConnectionManager, getConnectionOptions } from 'typeorm';
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();

    await app.init();
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

  it('#PUT /users should create another user', async () => {
    const user = {
      username: 'tester2',
    };
    const response = await request(app.getHttpServer())
      .put('/users')
      .send(user);
    expect(response.status).toBe(200);
  });

  it('#GET /users should get all users', async () => {
    const response = await request(app.getHttpServer()).get('/users');
    console.log(response.body);
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        username: 'tester2',
        workouts: expect.any(Array),
      },
      {
        id: expect.any(Number),
        username: 'tester',
        workouts: expect.any(Array),
      },
    ]);
    expect(response.status).toBe(200);
  });

  it('#GET /users/:id should get a user', async () => {
    const response = await request(app.getHttpServer()).get('/users/1');
    expect(response.body).toEqual({
      id: expect.any(Number),
      username: 'tester',
      workouts: expect.any(Array),
    });
    expect(response.status).toBe(200);
  });

  it('#DELETE /users/:id should delete a user', async () => {
    const response = await request(app.getHttpServer()).delete('/users/1');
    expect(response.status).toBe(200);
    const checkIfDeleted = await request(app.getHttpServer()).get('/users/1');
    expect(checkIfDeleted.body).toEqual({});
  });

  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
    // await app.close();
  });
});
