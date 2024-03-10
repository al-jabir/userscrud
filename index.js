const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./db/connectDB');
const usersRoute = require('./routes/usersRoute');
const PORT = 3000;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(usersRoute);

// 404 not found

app.use((req, res, next) => {
  res.status(404).send('<h1>404 not found</h1>');
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  connectDB();
});
