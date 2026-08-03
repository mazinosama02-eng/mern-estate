const { errorHandler } = require("../utils/error");
const User = require("./../models/userModel");
const jwt = require("jsonwebtoken");
const bcryptjs = require("bcryptjs");

exports.signup = async (req, res, next) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "success",
      data: {
        newUser,
      },
      message: "user created successful",
    });
  } catch (err) {
    next(err);
  }
};
exports.signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorHandler(404, "user not found!"));
    const validPassword = bcryptjs.compareSync(password, validUser.password);
    if (!validPassword) return next(errorHandler(401, "wrong credentiols!"));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pass, ...rest } = validUser._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (err) {
    next(err);
  }
};
