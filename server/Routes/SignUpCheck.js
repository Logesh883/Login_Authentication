const dataSchema = require("../Schema");

const SignUpCheck = async (req, res) => {
  const email = await dataSchema.findOne({ email: req.query.email });
  res.json(email);
};
module.exports = SignUpCheck;
