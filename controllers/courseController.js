const Course = require('../models/Course');

// GET all courses
exports.getCourses = async (req, res) => {
    const courses = await Course.find();
    res.render('all-courses', { courses });
};
