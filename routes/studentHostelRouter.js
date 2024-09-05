const express = require('express');
const router = express.Router();
const { students, courses, hostels } = require('../models/data')

 // GET student hostel
router.get('/hostels', (request, response) => {
    response.render('hostels', { title: 'Student Portal | Hostel Registration', students, hostels });
  })

    
// POST student hostel 
router.post('/hostels', (request, response) => {
    const { firstName, lastName, studentId, studentHostel, studentRoom } = request.body;
    const newHostel = {
        id: `${Math.floor(Math.random() * 1000)}`,
        firstName,
        lastName,
        studentId,
        studentHostel,
        studentRoom,
    };
    hostels.push(newHostel);
    response.redirect('/hostels');
  });
 
  
  module.exports = router;