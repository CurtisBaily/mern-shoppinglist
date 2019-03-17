if (process.env.NODE_ENV !== "production") {
  const dotenv = require("dotenv");
  dotenv.config();
}

module.exports = {
  mongoURI: process.env.DATABASE_URL,
  port: process.env.port || 5000,
  SESS_LIFETIME: process.env.SESS_LIFETIME || 1000 * 60 * 60 * 2,
  SESS_NAME: process.env.SESS_NAME || "sid",
  SESS_SECRET: process.env.SESS_SECRET || "thisisasecret!"
};
