import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import fs from 'fs';

// Import function to make MongoDB connection
import Connection from './database/db.js';

// Import Express Router
import Router from './routes/route.js';


// CONFIGURE 1
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));


// ====================================================================
// MORGAN LOGS (CONFIGURE 2)

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

app.use(morgan(':date[iso] :method :url :data :status :res[content-length] :response-time ms', {
    stream: fs.createWriteStream('./logs/access.log', {flags: 'a'})
}))

/*
  - Grok pattern in ELK for these logs: %{TIMESTAMP_ISO8601:timestamp} %{WORD:method} %{URIPATHPARAM:url} %{GREEDYDATA:req_data} %{BASE10NUM:res_status} %{DATA:res_content_length} %{BASE16FLOAT:res_time} ms
*/

// ====================================================================


// CONFIGURE 3

// Use the Express Router imported
app.use('/', Router);


// Make connection to MongoDB
const PORT = process.env.EXPRESS_PORT;
const url = process.env.DB_URL;
Connection(url);


// Start the server
app.listen(PORT, () => console.log(`Backend is running successfully on PORT ${PORT}`));

export default app;