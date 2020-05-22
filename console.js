require("dotenv").config();

// Connect to mongodb:
require("./config/database");

// Load up our models:
const User = require("./models/user");
const Score = require("./models/score");

console.log(
  "========================================",
  "Console loaded. To get all users type: User.find({}, (e, users) => { console.log(users) })",
  "========================================"
);
