const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const hostelSchema = new Schema({
  firstName: { 
    type: String, 
    required: true,
    minlength: [2, 'First name must be at least 2 characters long']
  },
  lastName: { 
    type: String, 
    required: true,
    minlength: [2, 'Last name must be at least 2 characters long']
  },
  studentId: { 
    type: String, 
    required: true, 
    unique: true,
    match: [/^[A-Z]{2}[0-9]{4}$/, 'Student ID must be in the format AA0000']
  },
  name: { 
    type: String, 
    required: true,
    enum: ['Gate Hall', 'Billy Hall']
  },
  roomNumber: { 
    type: String, 
    required: true,
    match: [/^[0-9]{3}$/, 'Room number must be a 3-digit number']
  },

});

module.exports = mongoose.model('Hostel', hostelSchema);