const path = require('path');

const express = require('express');
const mongoose = require('mongoose');

const authRoutes = require('./routes/auth');
const userRoutes = require('./routes/user');
const cors = require('./middlewares/CORS');
const errorHandler = require('./middlewares/error-handler');
const resourceNotFoundHandler = require('./middlewares/notfound');

const app = express();

app.use(express.json());
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use(cors);
app.use('/auth', authRoutes);
app.use(userRoutes);
app.use(resourceNotFoundHandler);
app.use(errorHandler);
mongoose
  .connect(
    'mongodb+srv://zeyad:6EwDCVKSbrowMQ7m@cluster0.jitwnwb.mongodb.net/distributed?retryWrites=true&w=majority&appName=Cluster0'
  )
  .then(() => {
    app.listen(3000, () => {
      console.log('server started');
    });
  });
