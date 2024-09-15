const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
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
      department: { 
        type: String, 
        required: true,
        enum: ['Software Engineering', 'Cyber Security']
      },
      session: { 
        type: String, 
        required: true,
        enum: ['2024/2025', '2025/2026']
      },
      courses: [{ type: Schema.Types.ObjectId, ref: 'Course' }],
}, { timestamps: true });

// Index for studentId 
studentSchema.index({ studentId: 1 });

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
