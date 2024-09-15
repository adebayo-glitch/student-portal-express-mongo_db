const mongoose = require('mongoose');

const connectDB = async () => {
    const dbURI = "mongodb+srv://cooverotech:wFY2A2pGICTw88xF@cluster0.cyiwe.mongodb.net/portaldb?retryWrites=true&w=majority&appName=Cluster0"
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