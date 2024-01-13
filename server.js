const mongoose = require('mongoose');
const dotenv = require('dotenv');
const helmet = require('helmet');
const morgan = require('morgan');

// dotenv.config();

const URI = "mongodb://127.0.0.1:27017/socialDatabase";

const connectDb = async () => {
    try {
        await mongoose.connect(URI);
        console.log('Connected to MongoDB')
    } catch(error) {
        console.log(`Error connecting to the database ${error}`);
        process.exit(0);
    }
};

module.exports = connectDb;