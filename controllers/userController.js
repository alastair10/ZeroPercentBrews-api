const User = require('../models/userModel');
const jsonwebtoken = require('jsonwebtoken');

// Generate web token
const createToken = (_id) => {
  return jsonwebtoken.sign({ _id }, process.env.SECRET, { expiresIn: '15d' });
};

// Log in user
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const user_id = user._id;
    const token = createToken(user_id);
    res.status(200).json({ email, username, user_id, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Register user
const registerUser = async (req, res) => {
  const { email, username, password } = req.body;

  try {
    const user = await User.register(email, username, password);
    const user_id = user._id;
    const token = createToken(user_id);
    res.status(200).json({ email, username, token, user_id });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
};
