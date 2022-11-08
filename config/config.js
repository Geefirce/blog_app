require("dotenv").config();
const DATABASE_CONNECT_STRING = process.env.DB_CONNECTION_STRING;
const PORT = 4040 || process.env.PORT;
const SECRET = process.env.SECRET;

module.exports = {
  DATABASE_CONNECT_STRING,
  PORT,
  SECRET,
};