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

// Get student courses edit page
exports.editStudent = async (req, res) => {
    try {
      const student = await Student.findById(req.params.id).populate('courses');
      const courses = await Course.find();
      if (!student) return res.status(404).send('Student not found');
      res.render('course-edit', { student, courses });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Update student courses
  exports.updateStudent = async (req, res) => {
    try {
      const { firstName, lastName, studentId, department, session, courses } = req.body;
      const student = await Student.findByIdAndUpdate(req.params.id, {
        firstName,
        lastName,
        studentId,
        department,
        session,
        courses: Array.isArray(courses) ? courses : [courses]
      }, { new: true });
      if (!student) return res.status(404).send('Student not found');
      res.redirect('/courses');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

// DELETE student courses
exports.deleteStudent = async (req, res) => {
    const { id } = req.params;
    await Student.findByIdAndDelete(id);
    res.status(200).send('Student deleted');
};
