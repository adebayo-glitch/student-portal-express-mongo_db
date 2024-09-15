const express = require('express')
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const connectDB = require('./config/database.js');
const studentRoutes = require('./routes/studentRoutes');
// const courseRoutes = require('./routes/courseRoutes');
// const hostelRoutes = require('./routes/hostelRoutes');

// import middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/handleError');

const PORT = process.env.PORT || 3500
const app = express()

// Connect to MongoDB
connectDB();

// static files and middleware
app.use(express.static('public'))
app.use(logger);  // Custom logger middleware
app.use(errorHandler); // Error-handling middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

// set template engine to ejs
app.set("view engine","ejs")


// Routes
app.use(studentRoutes);
// app.use(courseRoutes);
// // app.use('/hostels', hostelRoutes);
// app.use(hostelRoutes);

app.get('/', (req, res) => {
    res.render('index', { title: 'Student Portal | Home' });
});


// Listen to request
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})