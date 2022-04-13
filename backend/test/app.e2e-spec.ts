import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from '../src/workout/entity/workout.entity';
import { UserEntity } from '../src/user/entity/user.entity';
import { ExerciseEntity } from '../src/exercise/entity/exercise.entity';
import { Repository } from 'typeorm';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<UserEntity>;
  let workoutRepository: Repository<WorkoutEntity>;
  let exerciseRepository: Repository<ExerciseEntity>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  afterAll(async () => {
    await app.close();
  });

  describe('UserModule', () => {
    beforeEach(async () => {
      const uncleared = await request(app.getHttpServer()).get('/users');
      await Promise.all(
        uncleared.body.map(async (user) => {
          await request(app.getHttpServer()).delete(`/users/${user.id}`);
        }),
      );
    });

    it('should create a new user', async () => {
      const user = {
        username: 'tester',
      };
      const response = await request(app.getHttpServer())
        .put('/users')
        .send(user);
      expect(response.status).toBe(200);
    });

    it.skip('should get all users', async () => {
      await request(app.getHttpServer()).get('/users').expect(200);
      const data = await request(app.getHttpServer()).get('/users');
      expect(data.body.length).toBe(1);
    });
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      .expect('Hello World!');
  });
});
