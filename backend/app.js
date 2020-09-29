const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const Health = require('./src/controllers/health');
const Todo = require('./src/controllers/todo');

dotenv.config();

const app = express();
mongoose.connect('mongodb+srv://koo6357:koo6357@cluster0.g50h2.mongodb.net/todosShin?retryWrites=true&w=majority')
    .then(() => {
        console.log("success connect");
    })
    .catch((err) => {
        console.log("error", err);
    })

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/health', Health);
app.use('/todo', Todo);

const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`)
})