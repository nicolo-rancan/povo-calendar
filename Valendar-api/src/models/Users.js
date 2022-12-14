const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Users = new Schema(
  {
    username: {
      type: String,
    },
    password: {
      type: String,
    },
    token: {
      type: String,
    },
  },
  { collection: "Users" }
);

const model = mongoose.model("Users", Users);

module.exports = model;
