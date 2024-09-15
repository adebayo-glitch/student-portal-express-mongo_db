const Hostel = require('../models/Hostel');

// GET all hostels
exports.getHostels = async (req, res) => {
    const hostels = await Hostel.find();
    res.render('register-hostels', {title: 'Student Portal | Hostels Registration', hostels });
};


// POST add hostel
exports.addHostel = async (req, res) => {
    const { firstName, lastName, studentId, name, roomNumber } = req.body;
    const newHostel = new Hostel({ 
        firstName,
        lastName,
        studentId,
        name, 
        roomNumber 
    });
    await newHostel.save();
    res.redirect('/hostels');
};

// Get student hostels
exports.getStudentHostel = async (req, res) => {
    const hostels = await Hostel.find();
    res.render('hostels', { title: 'Student Portal | Hostels', hostels });
};

// Get student hostel edit page
exports.editStudentHostel = async (req, res) => {
    try {
      const hostel = await Hostel.findById(req.params.id);
      console.logo(hostel)
      if (!hostel) return res.status(404).send('hostel not found');
      res.render('hostel-edit', { hostel });
    } catch (error) {
      res.status(500).send(error.message);
    }
  };
  
  // Update student hostel 
  exports.updateStudentHostel = async (req, res) => {
    try {
      const { firstName, lastName, studentId, name, roomNumber } = req.body;
      const hostel = await Hostel.findByIdAndUpdate(req.params.id, {
        firstName,
        lastName,
        studentId,
        name,
        roomNumber,
        
      }, { new: true });
      if (!hostel) return res.status(404).send('hostel not found');
      res.redirect('/hostels');
    } catch (error) {
      res.status(400).send(error.message);
    }
  };

// DELETE student Hostel
exports.deleteStudentHostel = async (req, res) => {
    const { id } = req.params;
    await Hostel.findByIdAndDelete(id);
    res.status(200).send('Student hostel deleted successfully');
};