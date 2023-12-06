import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

import logger from './utils/logger.js'

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', Router);


const PORT = process.env.EXPRESS_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const url = process.env.DB_URL;

// Connection(username, password);
Connection(url);

// logger.info('Connection made')

app.listen(PORT, () => console.log(`backend is running successfully on PORT ${PORT}`));