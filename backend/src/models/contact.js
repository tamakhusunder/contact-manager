const mongoose = require("mongoose");
const { Schema } = mongoose;

const contactSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

const Contact = mongoose.model("contactModel", contactSchema);
module.exports = Contact;
