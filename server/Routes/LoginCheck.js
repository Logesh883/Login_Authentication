const dataSchema = require("../Schema");
const bcrypt = require("bcrypt");

const LoginCheck = async (req, res) => {
  const email = await dataSchema.findOne({ email: req.query.email });
  if (!email) {
    return res.json(null);
  }

  const hass = await bcrypt.compare(req.query.password, email.password);
  if (hass) {
    return res.json("valid");
  } else {
    return res.json("invalid");
  }
};

module.exports = LoginCheck;
