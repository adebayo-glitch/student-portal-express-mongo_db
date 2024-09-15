# Student Portal Application

This is a Student Portal application built with Node.js, Express, MongoDB, and Mongoose. It allows students to register for courses and hostels.

## Features

- Course display
- Student Course registration
- Hostel registration
- CRUD operations for students, courses, and hostel registrations

## API Routes

### Students course Registration

- GET /courses - Get all students
- POST /register-courses - Register a new student for courses
- PUT /:id - Update a student's information
- DELETE /:id - Delete a student

### Hostels

- GET /hostels - Get all hostel registrations
- POST /hostels/register-hostels - Register a student for a hostel
- PUT /hostels/:id - Update a hostel registration
- DELETE /hostels/:id - Delete a hostel registration


## Development

- The application uses the MVC (Model-View-Controller) pattern
- Models are defined in the `models` directory
- Controllers are in the `controllers` directory
- Routes are defined in the `routes` directory
- Views are in the `views` directory using EJS templating
- Config is use to store the DB configuration for MongoDB

## Data Validation

- Student ID must be in the format AA0000
- Course codes must be unique

## Indexing

- Indexes are created for frequently queried fields like studentId