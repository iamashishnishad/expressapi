const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Please add the contact name'],
    },
    email: {
      type: String,
      required: [true, 'Please add the contact email address'],
    },
    phone: {
      type: String,
      required: [true, 'Please add the contact phone number'],
    },
  },
  {
    timestamps: true, // This is the correct placement of the timestamps option
  }
);

module.exports = mongoose.model('Contact', contactSchema);