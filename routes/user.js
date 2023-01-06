const express = require('express');

const { loginUser, registerUser } = require('../controllers/userController');

const router = express.Router();

router.post('/register', registerUser);

// log in
router.post('/login', loginUser);

module.exports = router;