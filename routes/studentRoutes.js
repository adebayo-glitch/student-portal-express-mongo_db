const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentController');

router.get('/register-courses', studentController.getStudents);
router.post('/register-courses', studentController.registerStudent);
router.get('/courses', studentController.getStudentCourses);
router.get('/:id/edit', studentController.editStudent);
router.put('/:id', studentController.updateStudent);
router.delete('/:id', studentController.deleteStudent);

module.exports = router;
