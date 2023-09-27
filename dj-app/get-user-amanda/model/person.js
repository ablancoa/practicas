// Create a new model for the person table
// This model is used for the user table

const mongoose = require("mongoose");

const personSchema = new mongoose.Schema({
  rut: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  bornDate: {
    type: Date,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  email: {
    type: String,
  },
  socialNetwork: {
    type: String,
  },
  frecuency: {
    type: String,
  },
});

module.exports = mongoose.model("PersonSchema", personSchema);
