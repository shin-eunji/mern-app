const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', (req, res) => {
    const result = req.body;
    console.log("result", result);
})


module.exports = router;