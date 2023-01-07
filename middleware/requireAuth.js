const jsonwebtoken = require('jsonwebtoken')
const User = require('../models/userModel')

const requireAuth = async (req, res, next) => {

  // Gets Authrorization from request header
  const { authorization } = req.headers

  // If not Authroization in request header...
  if (!authorization) {
    return res.status(401).json({ error: 'Authorisation token required' })
  }

  // Extracts JWT from Auth header
  const token = authorization.split(" ")[1]

  try {

    // Generates user ID by verifying JWT
    const { _id } = jsonwebtoken.verify(token, process.env.SECRET)

    // Checks DB to see if ID exists there
    req.user = await User.findOne({ _id }).select(('_id'))
    next()

  } catch (error) {
    console.log(error)
    res.status(401).json({ error: 'Request not authorised' })
  }

}

module.exports = requireAuth;