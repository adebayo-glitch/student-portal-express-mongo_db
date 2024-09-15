const Student = require('../models/Student');
const Course = require('../models/Course');
const Hostel = require('../models/Hostel');

// GET all students
exports.getStudents = async (req, res) => {
    const students = await Student.find().populate('courses');
    // Fetch all available courses from the Course collection
     const courses = await Course.find();
    res.render('register-courses', { title: 'Student Portal | Course Registration', students, courses });
};
