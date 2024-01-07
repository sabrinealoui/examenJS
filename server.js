import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';

import { notFoundError, errorHandler } from './middlewares/error-handler.js';

import phdStudentRoutes from './routes/phdStudent.js';
import conferenceRoutes from './routes/conference.js';
import scientificPaperRoutes from './routes/scientificPaper.js';

const app = express();
const port = process.env.PORT || 9090;
const databaseName = 'examen2cinfo2324sp';
const db_url = process.env.DB_URL || `mongodb://127.0.0.1:27017`;

mongoose.set('debug', true);
mongoose.Promise = global.Promise;

mongoose
  .connect(`${db_url}/${databaseName}`)
  .then(() => {
    console.log(`Connected to ${databaseName}`);
  })
  .catch(err => {
    console.log(err);
  });

  app.use(cors());
  app.use(morgan('dev'));
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
  app.use('/img', express.static('public/images'));

  app.use('/scientific-papers', scientificPaperRoutes);
  app.use('/phd-students', phdStudentRoutes);
  app.use('/conferences', conferenceRoutes);

app.use(notFoundError);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}/`);
});