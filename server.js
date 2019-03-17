const express = require("express");
const session = require("express-session");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require("path");

const items = require("./routes/api/items");

const app = express();

// Bodyparser Middleware
app.use(bodyParser.json());

// Configuration items
const {
  mongoURI,
  port,
  NODE_ENV,
  SESS_LIFETIME,
  SESS_NAME,
  SESS_SECRET
} = require("./config");

const IN_PROD = NODE_ENV === "production";

// Session cookie
app.use(
  session({
    name: SESS_NAME,
    resave: false,
    saveUninitialized: true,
    secret: SESS_SECRET,
    cookie: {
      maxAge: SESS_LIFETIME,
      sameSite: true,
      secure: IN_PROD
    }
  })
);

// Connect to MongoDB
mongoose
  .connect(mongoURI)
  .then(() => console.log("MongoDB Connected..."))
  .catch(err => console.log(err));

// Api routes
app.use("/api/items", items);

// Server static assets if in production
if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("client/build"));
  app.get("/", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

app.listen(port, () => console.log(`Server started on port ${port}`));
