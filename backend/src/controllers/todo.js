const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', async (req, res) => {
    const result = await Todo.find({})

    res.json(result)
})

router.post('/', async (req, res) => {
    const {title, description} = req.body;

    const todo = new Todo({title, description})
    const result = await todo.save()

    res.json(result)
})

module.exports = router;