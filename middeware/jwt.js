const jwt = require("jsonwebtoken");

const createAccessToken = (user_id, role) => {
  return jwt.sign({ id: user_id, role }, process.env.JWT_SECRET, {
    expiresIn: "80s",
  });
};

module.exports = createAccessToken;
