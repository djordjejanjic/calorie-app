const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const users = require('./routes/users');
const food = require('./routes/food');

const app = express();
const port = 5000;

app.use(cors())
app.use(express.json());

app.use('/users', users);
app.use('/food', food);

const MONGO_URL = `mongodb+srv://djordje:Zvezda91@cluster0.7ddx7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
// noinspection JSCheckFunctionSignatures
mongoose.connect(MONGO_URL, {useNewUrlParser: true});

mongoose.connection.once("open", () => console.log("Connected to the database"));

app.listen(port, () => console.log(`Example app on port ${port}!`));
