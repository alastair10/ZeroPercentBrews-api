const express = require('express');

const { loginUser, registerUser, getUser, updateSaved, updateCredentials } = require('../controllers/userController');
const requireAuth = require('../middleware/requireAuth');

const router = express.Router();

// register
router.post('/register', registerUser);

// log in
router.post('/login', loginUser);

// get user
router.get('/:id', requireAuth, getUser);

// patch user saves
router.patch('/:id/saved', requireAuth, updateSaved);

// patch user credentials
router.patch('/:id/account', requireAuth, updateCredentials)

module.exports = router;