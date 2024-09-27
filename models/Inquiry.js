// models/Inquiry.js
const mongoose = require('mongoose');

const InquirySchema = new mongoose.Schema({
  fullName: { type: String, required: true },
  emailAddress: { type: String, required: true },
  mobileNo: { type: String, required: false },
  address: { type: String, required: false },
  message: { type: String, required: true },
}, { timestamps: true });

const Inquiry = mongoose.model('Inquiry', InquirySchema);
module.exports = Inquiry;
