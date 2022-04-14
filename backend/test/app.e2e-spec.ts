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
    it('#PUT /exercises should add an exercise correctly', async () => {
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
      const response = await request(app.getHttpServer())
        .get('/exercises')
        .send();
      expect(response.body).toEqual([
        {
          id: expect.any(Number),
          name: 'test',
          description: 'test',
          category: 'I dont know',
          image: 'No url',
          muscle: Muscle.Chest,
          muscleSecondary: Muscle.Biceps,
          type: 'test',
          level: 'test',
        },
        {
          id: expect.any(Number),
          name: 'test123',
          description: 'test123',
          category: 'I dont know123',
          image: 'No url123',
          muscle: Muscle.Chest,
          muscleSecondary: Muscle.Biceps,
          type: 'test123',
          level: 'test123',
        },
      ]);
    });

    it('#GET /exercises/:id should return exercise by id correctly', async () => {
      const id = '1';
      const response = await request(app.getHttpServer()).get(
        `/exercises/${id}`,
      );
      expect(response.body).toEqual({
        id: 1,
        name: 'test',
        description: 'test',
        category: 'I dont know',
        image: 'No url',
        muscle: Muscle.Chest,
        muscleSecondary: Muscle.Biceps,
        type: 'test',
        level: 'test',
      });
    });
  });

  afterAll(async () => {
    await new DatabaseCleaner().cleanup();
    // await app.close();
  });
});
