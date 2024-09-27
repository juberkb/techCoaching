const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  title: { type: String, required: true },
  category: { type: String, required: true },
  rating: { type: Number, required: true },
  reviews: { type: Number, required: true },
  imageUrl: { type: String, required: true },
  courseText: { type: String, required: true },
  onlineOnly: { type: Boolean, default: false },
});

const Course = mongoose.model('Course', courseSchema);
module.exports = Course;
