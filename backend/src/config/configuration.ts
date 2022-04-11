export default () => ({
  database: {
    host: process.env.POSTGRES_HOST,
    port: parseInt(process.env.POSTGRES_PORT, 10) || 5432,
    user: process.env.RETRO_DB_USER,
    password: process.env.RETRO_DB_PASSWORD || 'postgres',
    name: process.env.RETRO_DB_NAME || 'postgres',
  },
});
