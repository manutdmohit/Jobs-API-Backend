exports.getAllJobs = async (req, res) => {
  res.send('get all jobs');
};

exports.getJob = async (req, res) => {
  res.send('get job');
};

exports.createJob = async (req, res) => {
  res.json(req.user);
};

exports.updateJob = async (req, res) => {
  res.send('Update Job');
};

exports.deleteJob = async (req, res) => {
  res.send('Delete Job');
};
