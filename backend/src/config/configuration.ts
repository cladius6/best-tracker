export default () => ({
  api_port: process.env.API_PORT || 3000,
  database: {
    node_env: process.env.NODE_ENV,
    url: process.env.DATABASE_URL,
  },
});
