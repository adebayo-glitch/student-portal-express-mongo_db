
const express = require('express')
const studentCourseRoutes = require('./routes/studentCourseRouter');
const studentHostelRoutes = require('./routes/studentHostelRouter');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

// import middleware
const logger = require('./middleware/logger');
const errorHandler = require('./middleware/handleError');

const PORT = process.env.PORT || 3500
const app = express()

// static files and middleware
app.use(express.static('public'))
app.use(logger);  // Custom logger middleware
app.use(errorHandler); // Error-handling middleware
app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({ extended: true }));

// set template engine to ejs
app.set("view engine","ejs")

app.use(studentCourseRoutes);
app.use(studentHostelRoutes);


// Listen to request
app.listen(PORT, ()=>{
    console.log(`Server running on port ${PORT}`)
})