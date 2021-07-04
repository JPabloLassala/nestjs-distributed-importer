export default () => ({
  port: parseInt(process.env.NODE_PORT, 10) || 3000,
  databases: {
    mongo: {
      host: process.env.MONGO_HOST,
      port: parseInt(process.env.MONGO_PORT, 10) || 27017,
    },
    sql: {
      host: process.env.SQL_HOST,
      port: parseInt(process.env.SQL_PORT, 10) || 3306,
    },
  },
});
