const express = require('express');
const router = express.Router();
const { students, courses, hostels } = require('../models/data')

 // GET student hostel
router.get('/hostels', (request, response) => {
    response.render('hostels', { title: 'Student Portal | Hostel Registration', students, hostels });
  })

 
  
  module.exports = router;