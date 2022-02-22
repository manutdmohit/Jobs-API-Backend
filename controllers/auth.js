const { StatusCodes } = require('http-status-codes');

const { BadRequestError } = require('../errors');

const User = require('../models/User');

exports.register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = user.generateToken();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

exports.login = async (req, res) => {
  res.send('login user');
};
