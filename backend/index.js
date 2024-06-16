const port = 4000;

const express = require('express');
const app = express();

const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const multer = require('multer');
const path = require('path');
const cors = require('cors');
const e = require('express');

app.use(express.json());
app.use(cors());

// Connect to MongoDB
mongoose.connect ('mongodb+srv://hasharanethmi2020:oLrnq67RZ0lfCGLz@cluster0.5fqolpu.mongodb.net/petparadise');

// API creation
app.get('/', (req, res) => {
  res.send('Hello World');
});



app.listen(port, (err) => {
  if (!err) {
    console.log(`Server is running on port: ` + port);
  } else {
    console.log(err);
  }
});