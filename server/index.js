const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);

console.log('App create');

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const postsRouter = require('./routes/post.routes');
const usersRouter = require('./routes/user.routes');

app.use('/posts', postsRouter);
app.use('/users', usersRouter);

app.get("/healthcheck", (req, res) => {
    res.send("Health is good");
});

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});