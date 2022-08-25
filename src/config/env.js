require('dotenv').config();

const env = {
  port: process.env.PORT,
  dbHost: process.env.DB_HOST,
  dbUser: process.env.USER,
  dbPassword: process.env.DB_PASSWORD,
  dbName: process.env.DB_NAME,
};

module.exports = env;
