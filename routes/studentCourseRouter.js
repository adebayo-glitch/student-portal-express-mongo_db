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


  
  module.exports = router;