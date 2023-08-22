const jwt = require("jsonwebtoken");
const User = require("../models/User"); // Import your User model

const sec = process.env.JWT;

const verifyToken = async (req, res, next) => {
  try {
    const cookies = req.cookies.access_token;
    const verify = jwt.verify(cookies, sec);

    if (verify) {
      const idUser = verify.id;
      const user = await User.findOne({ _id: idUser });

      if (user) {
        req.userData = user;
      }
    }
  } catch (error) {
    return res.status(404).json({ error });
  }

  next();
};

module.exports = verifyToken;
