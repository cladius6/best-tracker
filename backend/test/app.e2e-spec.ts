import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { WorkoutEntity } from '../src/workout/entity/workout.entity';
import { UserEntity } from '../src/user/entity/user.entity';
import { ExerciseEntity } from '../src/exercise/entity/exercise.entity';
import { getConnection, Repository } from 'typeorm';
import { userInfo } from 'os';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  let userRepository: Repository<UserEntity>;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = await moduleFixture.createNestApplication();
    const userRepository = await getConnection().getRepository('user_entity');
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
    it.only('should create a new user', async () => {
      const user = {
        username: 'tester',
      };
      const response = await request(app.getHttpServer())
        .put('/user')
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
