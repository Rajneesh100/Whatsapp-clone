import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';

import Connection from './database/db.js';
import Routes from './routes/Routes.js';


dotenv.config();
const app = express();

// const PORT = 8000;

// const username = process.env.DB_USERNAME;
// const password = process.env.DB_PASSWORD;

// app.use(cors());
// app.use(body.json({ extended: true }));
// app.use(body.urlencoded({ extended: true }));
// app.use('/', Routes);

// Connection(username,password);

// app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));



const PORT = 8000;

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

Connection(username, password);

app.listen(PORT, () => console.log(`Server is running successfully on PORT ${PORT}`));

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', Routes);