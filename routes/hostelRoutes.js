const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

router.get('/register-hostels', hostelController.getHostels);
router.post('/register-hostels', hostelController.addHostel);
router.get('/hostels', hostelController.getStudentHostel);
router.get('/hostels/:id/edit', hostelController.editStudentHostel);
router.put('/hostels/:id', hostelController.updateStudentHostel);
router.delete('/hostels/:id', hostelController.deleteStudentHostel);

module.exports = router;
