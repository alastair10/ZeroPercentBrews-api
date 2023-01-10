const User = require('../models/userModel');
const Beer = require('../models/beerModel');
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

// Get user by its ID
const getUser = async (req, res) => {
  const { id } = req.params;

  // const user = await User.findById(id)

  const user = await User.findById(id).populate('saved')
  
  if (!user) {
    return res.status(400).json({ error: "User does not exist"});
  }

  res.status(200).json({message: "OK", username: user.username, email: user.email, saved: user.saved})

};

// Update user saved beers by ID
const updateSaved = async (req, res) => {
  const { id } = req.params;
  const { beer_id, isSaved } = req.body;

  if (!beer_id) {
    return res.status(400).json({ error: 'Must provide a beer_id' });
  };

  if (isSaved) {
    // const beer = await Beer.findById(beer_id);
    const user = await User.findByIdAndUpdate(
      { _id: id },
      { $pullAll: { saved: [beer_id] }},
      { new: true }
    );

    res.status(200).json({ message: "OK", user_id: user._id, saved: user.saved});

  } else {
    const beer = await Beer.findById(beer_id);

    const user = await User.findByIdAndUpdate(
      { _id: id },
      { $addToSet: { saved: beer }},
      { new: true }
    );

    res.status(200).json({ message: "OK", user_id: user._id, saved: user.saved});
  }
 

  

};

module.exports = {
  loginUser,
  registerUser,
  getUser,
  updateSaved
};
