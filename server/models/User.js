const { Schema, model } = require("mongoose");

const User = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

model.exports = model("User", User);
