const User = require("./../models/userModel");
const bcryptjs = require("bcryptjs");

exports.signup = async (req, res) => {
  try {
    const { userName, email, password } = req.body;
    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(201).json({
      statis: "success",
      data: {
        newUser,
      },
      message: "user created successful",
    });
  } catch (err) {
    res.status(500).json({
      status: "fail",
      message: err.message,
    });
  }
};
