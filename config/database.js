const mongoose = require('mongoose');

const connectDB = async () => {
    const dbURI = "mongodb+srv://pillarbasetech:@stportal.ivk0x.mongodb.net/?retryWrites=true&w=majority&appName=stPortal"
    const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };
    try {
        mongoose.connect(dbURI, clientOptions)
            .then(() => {
                console.log("database connected")
            })
    } catch (error) {
        console.error('Could not connect to MongoDB', error);
        process.exit(1);
    }
};

module.exports = connectDB;