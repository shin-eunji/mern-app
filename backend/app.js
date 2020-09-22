const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config();
const app = express();

mongoose.connect('mongodb+srv://koo6357:koo6357@cluster0.g50h2.mongodb.net/todosShin?retryWrites=true&w=majority')
.then (() => {
    console.log("connect success");
})
.catch ((err) => {
    return err
})

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));



const PORT = process.env.PORT;

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
})

