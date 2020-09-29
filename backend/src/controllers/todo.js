const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await Todo.find()
    console.log("[sgaa addTodo]", result);
    res.json(result)

})