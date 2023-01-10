const express = require('express');

const { loginUser, registerUser, getUser } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// register
router.post('/register', registerUser);

// log in
router.post('/login', loginUser);

// get user
router.get('/:id', requireAuth, getUser);

module.exports = router;