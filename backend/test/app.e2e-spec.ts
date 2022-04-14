import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { DatabaseCleaner } from './database-cleaner';
import { Muscle } from '../src/exercises/enum/muscle.enum';
import { IAddExercise } from '../src/exercises/interfaces/exercise.interface';
describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();

    await app.init();
  });

  describe('UsersModule', () => {
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
  });

  describe('ExercisesModule', () => {
    it('#PUT /exercises should add an exercise', async () => {
      const exercise = {
        name: 'test',
        description: 'test',
        category: 'I dont know',
        image: 'No url',
        muscle: Muscle.Chest,
        muscleSecondary: Muscle.Biceps,
        type: 'test',
        level: 'test',
      };
      const response = await request(app.getHttpServer())
        .put('/exercises')
        .send(exercise);
      expect(response.status).toBe(200);
    });
  });

  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
    // await app.close();
  });
});
