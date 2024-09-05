const express = require('express');
const router = express.Router();
const { students, courses } = require('../models/data')

// Get the index page
router.get('/', (request, response) => {
    response.render('index', { title: 'Student Portal | Home' });
})

// GET student courses
router.get('/courses', (request, response) => {
    response. Render('courses', { title: 'Student Portal | Course Registration', students, courses });
})

 // POST student Courses 
router.post('/courses', (request, response) => {
    const { firstName, lastName, studentId, studentDepartment, studentSession, courses } = request.body;
    const newCourse = {
        id: `MD${Math.floor(Math.random() * 1000)}`,
        firstName,
        lastName,
        studentId,
        studentDepartment,
        studentSession,
        courses: Array.isArray(courses) ? courses : [courses]
    };
    students.push(newCourse);
    response.redirect('/courses');
  });

   
// Edit student courses
router.get('/students/:id/edit', (request, response) => {
    const student  = students.find(student => student.id === request.params.id);
    if (!student ) return response.status(404).send('Course not found');
    response.render('course-edit', { student, courses  });
  });


  
  module.exports = router;