const { StatusCodes } = require('http-status-codes');
const { BadRequestError, NotFoundError } = require('../errors');

const Job = require('../models/Job');

exports.getAllJobs = async (req, res) => {
  const jobs = await Job.find({ createdBy: req.user.userId }).sort('createdAt');
  res.status(StatusCodes.OK).json({ count: jobs.length, jobs });
};

exports.getJob = async (req, res) => {
  const {
    user: { userId },
    params: { id: jobId },
  } = req;

  const job = await Job.findOne({
    _id: jobId,
    createdBy: userId,
  });

  if (!job) {
    throw new NotFoundError(`No job with id ${job}`);
  }

  res.status(StatusCodes.OK).json({ job });
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
