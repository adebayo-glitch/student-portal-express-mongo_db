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


// POST create student with course registration
exports.registerStudent = async (req, res) => {
    const { firstName, lastName, studentId, department, session, courses } = req.body;
    console.log(firstName)
    console.log(department)
    const newStudent = new Student({
        firstName,
        lastName,
        studentId,
        department,
        session,
        courses,
        
    });

    await newStudent.save();
    res.redirect('/courses');
};

// Get student courses
exports.getStudentCourses = async (req, res) => {
    const students = await Student.find().populate('courses', 'name');
    // Fetch all available courses from the Course collection
     const courses = await Course.find();
    res.render('courses', { title: 'Student Portal | Course Registration', students, courses });
};


