const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(
  "mongodb+srv://adora-Ruth:adoraruth01@cluster0.w2hqn0r.mongodb.net/chatapp?retryWrites=true&w=majority",
  { keepAlive: true }
);

module.exports.User = require("./user");