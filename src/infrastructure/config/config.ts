export default () => ({
  port: parseInt(process.env.NODE_PORT, 10) || 3000,
  env: process.env.ENV_NAME,
});
