if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

module.exports = {
  mongoURI: process.env.DATABASE_URL,
  port: process.env.port || 5000
};
