const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Events = new Schema(
  {
    workers: {
      type: Array,
    },
    description: {
      type: String,
    },
    title: {
      type: String,
    },
    whento: {
      type: String,
    },
  },
  { collection: "Events" }
);

const model = mongoose.model("Events", Events);

module.exports = model;
