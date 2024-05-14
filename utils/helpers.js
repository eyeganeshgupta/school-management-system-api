const bcrypt = require("bcryptjs");

exports.hashPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);
  return hashedPassword;
};

exports.isPasswordMatched = async (password, hash) => {
  return await bcrypt.compare(password, hash);
};
