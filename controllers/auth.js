const { StatusCodes } = require('http-status-codes');

const { BadRequestError, UnauthenticatedError } = require('../errors');

const User = require('../models/User');

exports.register = async (req, res) => {
  const user = await User.create({ ...req.body });

  const token = user.generateToken();

  res.status(StatusCodes.CREATED).json({ user: { name: user.name }, token });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const user = await User.findOne({ email });

  if (!user) {
    //compare password
    throw new UnauthenticatedError('Invalid Credentials');
  }

  const token = user.generateToken();

  res.status(StatusCodes.OK).json({ user: { name: user.name }, token });

  res.status;
};
