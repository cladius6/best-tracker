import * as request from 'supertest';
import { DatabaseCleaner } from './database-cleaner';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';

describe('WorkoutsController (e2e)', () => {
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

  it('#PUT /workouts should create workout for user correctly', async () => {
    const user = {
      username: 'tester',
    };
    const response2 = await request(app.getHttpServer())
      .put('/users')
      .send(user);
    const workout0 = {
      name: 'W1',
      userId: '1',
    };
    const response = await request(app.getHttpServer())
      .put('/workouts')
      .send(workout0);
    expect(response.status).toBe(200);
  });

  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
  });
});
