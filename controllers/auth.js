const { StatusCodes } = require('http-status-codes');

const User = require('../models/User');

exports.register = async (req, res) => {
  const user = await User.create({ ...req.body });
  res.status(StatusCodes.CREATED).json({ user });
};

exports.login = async (req, res) => {
  res.send('login user');
};
