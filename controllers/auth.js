const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');

const { BadRequestError } = require('../errors');

const User = require('../models/User');

exports.register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = jwt.sign({ userId: user._id, name: user.name }, 'jwtsecret', {
    expiresIn: '30d',
  });

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

exports.login = async (req, res) => {
  res.send('login user');
};
