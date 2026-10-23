import User from "./../models/userModel.js";
import bcrypt from "bcryptjs";
import { errorHandler } from "../utils/errorHandling.js";

export const signup = async (req, res, next) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({
      username: username,
      email: email,
      hashedPassword: password,
      password: hashedPassword,
    });
    res.status(201).json({
      status: "succees",
      data: {
        newUser,
      },
    });
  } catch (error) {
    next(error);
  }
};
