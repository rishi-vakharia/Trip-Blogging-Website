import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

//components
import Connection from './database/db.js';
import Router from './routes/route.js';

import logger from './utils/logger.js'


dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

// ==================================
// MORGAN LOGGING

// Extract request's body, convert it to string and this output will be tagged as 
// "data" parameter for morgan log pattern
morgan.token('data', request => JSON.stringify(request.body))

/*
  - Add the Morgan logger with the following format specified
  - The format is what will be printed by the server each time a request is received
  - Don't use logging when in testing environment which is why NODE_ENV is checked
	- In the production environment we want the logs to be written to a file
	- fs.createWriteStream() writes the specified logs into the access.log file in the current directory
	- The 'a' flag is for appending
	- In the development environment we want the logs to be printed to the console
	- And the second app.use(morgan()) call does exactly that
*/

app.use(morgan(':date[web] :method :url :status :res[content-length] - :response-time ms :data', {
    stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
}))

// ==================================

app.use('/', Router);


const PORT = process.env.EXPRESS_PORT;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const url = process.env.DB_URL;

// Connection(username, password);
Connection(url);

// logger.info('Connection made')

app.listen(PORT, () => console.log(`Backend is running successfully on PORT ${PORT}`));