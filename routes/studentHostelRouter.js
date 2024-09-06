const express = require('express');
const router = express.Router();
const { students, courses, hostels } = require('../models/data')

router.get('/', (request, response) => {
    response.render('index', { title: 'Student Portal | Home' });
})

// GET student hostel
router.get('/hostels', (request, response) => {
    response.render('hostels', { title: 'Student Portal | Hostel Registration', students, hostels });
  })

// GET student hostel registration
router.get('/register-hostels', (request, response) => {
    response.render('register-hostels', { title: 'Student Portal | Hostel Registration', students, hostels });
  })
  
  
// POST student hostel registration
router.post('/register-hostels', (request, response) => {
    const { firstName, lastName, studentId, studentHostel, studentRoom } = request.body;
    const newHostel = {
        id: `${Math.floor(Math.random() * 100)}`,
        firstName,
        lastName,
        studentId,
        studentHostel,
        studentRoom,
    };
    hostels.push(newHostel);
    response.redirect('/hostels');
  });

// Edit student hostel
router.get('/hostels/:id/edit', (request, response) => {
    const hostel  = hostels.find(hostel => hostel.id === request.params.id);
    if (!hostel ) return response.status(404).send('Hostel not found');
    response.render('hostel-edit', { hostel, students  });
  });

// // Update student hostel
  router.put('/hostels/:id', (request, response) => {
    const hostelIndex = hostels.findIndex(s => s.id == request.params.id);
    if (hostelIndex === -1) return response.status(404).send('Hostel not found');
    hostels[hostelIndex] = {
      ...hostels[hostelIndex],
      firstName: request.body.firstName,
      lastName: request.body.lastName,
      studentId: request.body.studentId,
      studentHostel: request.body.studentHostel,
      studentRoom: request.body.studentRoom,
    };
    response.redirect('/hostels');
  });

// Delete student hostel
  router.delete('/hostels/:id', (request, response) => {
    const hostelId = request.params.id;
    const hostelIndex = hostels.findIndex(hostel => hostel.id === hostelId);
    if (hostelIndex === -1) {
      return response.status(404).send('Hostel not found');
    }
    hostels.splice(hostelIndex, 1);
    response.status(200).send('Hostel deleted successfully');
  });
  
  module.exports = router;