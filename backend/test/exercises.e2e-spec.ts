import { Muscle } from '../src/exercises/enum/muscle.enum';
import * as request from 'supertest';
import { INestApplication } from '@nestjs/common';
import { Test, TestingModule } from '@nestjs/testing';
import { AppModule } from '../src/app.module';
import { DatabaseCleaner } from './database-cleaner';

describe('ExercisesController (e2e)', () => {
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
  it('#PUT /exercises should add another exercise correctly', async () => {
    const exercise = {
      name: 'test123',
      description: 'test123',
      category: 'I dont know123',
      image: 'No url123',
      muscle: Muscle.Chest,
      muscleSecondary: Muscle.Biceps,
      type: 'test123',
      level: 'test123',
    };
    const response = await request(app.getHttpServer())
      .put('/exercises')
      .send(exercise);
    expect(response.status).toBe(200);
  });

  it('#GET /exercises should return all exercises correctly', async () => {
    const exercise0 = {
      name: 'test123',
      description: 'test123',
      category: 'I dont know123',
      image: 'No url123',
      muscle: Muscle.Chest,
      muscleSecondary: Muscle.Biceps,
      type: 'test123',
      level: 'test123',
    };
    const response00 = await request(app.getHttpServer())
      .put('/exercises')
      .send(exercise0);
    const exercise = {
      name: 'test123',
      description: 'test123',
      category: 'I dont know123',
      image: 'No url123',
      muscle: Muscle.Chest,
      muscleSecondary: Muscle.Biceps,
      type: 'test123',
      level: 'test123',
    };
    const response0 = await request(app.getHttpServer())
      .put('/exercises')
      .send(exercise);
    const response = await request(app.getHttpServer())
      .get('/exercises')
      .send();
    expect(response.body).toEqual([
      {
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        category: expect.any(String),
        image: expect.any(String),
        muscle: Muscle.Chest,
        muscleSecondary: Muscle.Biceps,
        type: expect.any(String),
        level: expect.any(String),
      },
      {
        id: expect.any(Number),
        name: expect.any(String),
        description: expect.any(String),
        category: expect.any(String),
        image: expect.any(String),
        muscle: Muscle.Chest,
        muscleSecondary: Muscle.Biceps,
        type: expect.any(String),
        level: expect.any(String),
      },
    ]);
  });

  it('#GET /exercises/:id should return exercise by id correctly', async () => {
    const exercise0 = {
      name: 'test123',
      description: 'test123',
      category: 'I dont know123',
      image: 'No url123',
      muscle: Muscle.Chest,
      muscleSecondary: Muscle.Biceps,
      type: 'test123',
      level: 'test123',
    };
    const response00 = await request(app.getHttpServer())
      .put('/exercises')
      .send(exercise0);
    const id = response00.body.id;
    const response = await request(app.getHttpServer()).get(`/exercises/${id}`);
    expect(response.body).toEqual({
      id: id,
      name: 'test123',
      description: 'test123',
      category: 'I dont know123',
      image: 'No url123',
      muscle: Muscle.Chest,
      muscleSecondary: Muscle.Biceps,
      type: 'test123',
      level: 'test123',
    });
  });
  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
  });
});
