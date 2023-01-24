"use strict";
import * as dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose';
import express from 'express';

import { router as authorsRoutes } from './routes/authorsRoutes.js';
import { router as booksRoutes } from './routes/booksRoutes.js';
import { router as commentsRoutes } from './routes/commentsRoutes.js';
import { router as usersRoutes } from './routes/usersRoutes.js';

// express app
const app = express();

// connection to mongoose
mongoose.connect(process.env.DB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
.then((res) => {
    console.log('Connected to database');
    app.listen(process.env.PORT);
    console.log('Listening on port ', process.env.PORT);
})
.catch((err) => console.log(err));

// mongoose.set('strictQuery', false); // TODO: delete later 

// middleware
app.use(express.json());

app.use((req, res, next)=> {
    console.log(req.path, req.method);
    next();
});

// routes
app.use('/api/authors', authorsRoutes);
app.use('/api/books', booksRoutes);
app.use('/api/comments', commentsRoutes);
app.use('/api/users', usersRoutes);



