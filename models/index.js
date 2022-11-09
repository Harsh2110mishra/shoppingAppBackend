const mongoose = require("mongoose");
const { Schema } = mongoose;

const contacts = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
});

module.exports.contacts = mongoose.model("contacts", contacts);
