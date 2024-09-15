const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  code: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^[A-Z]{3}[0-9]{3}$/, 'Course code must be in the format AAA000']
  },
  name: { 
    type: String, 
    required: true,
    minlength: [3, 'Course name must be at least 3 characters long']
  },
  department: { 
    type: String, 
    required: true,
    enum: ['Software Engineering', 'Cyber Security']
  },
  credits: { 
    type: Number, 
    required: true,
    min: [1, 'Credits must be at least 1'],
    max: [6, 'Credits cannot exceed 6']
  }
});

module.exports = mongoose.model('Course', courseSchema);