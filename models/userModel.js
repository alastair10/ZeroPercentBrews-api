const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      unique: false,
    },
    saved: { type: Array, require: true},
  },
  { timestamps: true }
);

// Adding 'register' validation methods to User model
userSchema.statics.register = async function (email, username, password) {
  if (!email || !username || !password) {
    throw Error('All fields are required.');
  }
  if (!validator.isEmail(email)) {
    throw Error('Invalid email address.');
  }
  // check the email is unique
  const emailExists = await this.findOne({ email });
  if (emailExists) {
    throw Error('Email address is already in use.');
  }
  // check the username is unique
  const usernameExists = await this.findOne({ username });
  if (usernameExists) {
    throw Error('Username is already in use.');
  }
  // now hash the password before creating the user on the DB
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  const user = await this.create({ email, username, password: hash });
  return user;
};

// Adding 'login' validation methods to User model
userSchema.statics.login = async function (email, password) {
  if (!email || !password) {
    throw Error('All fields are required.');
  }
  // check the user exists
  const user = await this.findOne({ email });
  if (!user) {
    throw Error('Invalid login credentials.');
  }
  // check the password the same
  const match = await bcrypt.compare(password, user.password);
  if (!match) {
    throw Error('Invalid login credentials.');
  }
  // NOTE: both email and password same error msg
  // you don't give the user clues!
  return user;
};

module.exports = mongoose.model('User', userSchema);
