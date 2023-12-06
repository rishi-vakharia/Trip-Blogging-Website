
import winston from 'winston';
import mongoose from 'mongoose';

// Requiring `winston-mongodb` will expose winston.transports.MongoDB
import winstonMongoDB from 'winston-mongodb';

import dotenv from 'dotenv';
dotenv.config();

// Create a logger to log to just console for now
const logger = winston.createLogger({
    level: 'info',
    format: winston.format.simple(),
    transports: [
        new winston.transports.Console(),
        new winston.transports.MongoDB({ db: process.env.DB_URL, options: {useUnifiedTopology: true}, collection: 'logs' })
    ]
});

// Ensure that logging to MongoDB will only be configured once the MongoDB connection is open
// const conn = mongoose.connection;
// conn.once('open', () => {
//     winston.add(new winston.transports.MongoDB({ db: process.env.DB_URL, options: {useUnifiedTopology: true}, collection: 'logs' }));
// });

// logger.info("Testing");

export default logger
