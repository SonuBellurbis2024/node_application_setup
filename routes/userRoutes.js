const express = require('express');
const router = express.Router();
const userService = require('../services/userService');

// Example route
router.get('/', async (req, res) => {
    const users = await userService.getUsers();
    res.json(users);
});

module.exports = router;
