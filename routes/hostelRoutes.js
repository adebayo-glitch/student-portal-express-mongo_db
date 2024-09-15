const express = require('express');
const router = express.Router();
const hostelController = require('../controllers/hostelController');

router.get('/register-hostels', hostelController.getHostels);
router.post('/register-hostels', hostelController.addHostel);
router.get('/hostels', hostelController.getStudentHostel);
router.get('/:id/edit', hostelController.editStudentHostel);
router.put('/:id', hostelController.updateStudentHostel);
router.delete('/:id', hostelController.deleteStudentHostel);

module.exports = router;
