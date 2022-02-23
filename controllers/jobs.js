const { StatusCodes } = require('http-status-codes');
const { BadRequestError, UnauthenticatedError } = require('../errors');

const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

exports.getJob = async (req, res) => {
  res.send('get job');
};

exports.createJob = async (req, res) => {
  req.body.createdBy = req.user.userId;

  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });

  res.json(req.user);
};

exports.updateJob = async (req, res) => {
  res.send('Update Job');
};

exports.deleteJob = async (req, res) => {
  res.send('Delete Job');
};
