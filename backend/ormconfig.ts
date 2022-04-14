export default {
  type: 'postgres',
  schema: 'public',
  url: 'postgres://postgres:postgres@127.0.0.1:5432/test',
  entities: ['./src/*/entity/*.entity.ts'],
  migrations: ['./src/migrations/*.ts'],
  cli: {
    migrationsDir: 'src/migrations',
  },
};
