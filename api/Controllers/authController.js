import User from "./../models/userModel";
import bcrypt from "bcryptjs";

export const signup = async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const hashedPassword = bcrypt.hashSync(password, 10);
    const newUser = await User.create({ username, email, hashedPassword });
    res.status(201).json({
      status: "succees",
      data: {
        newUser,
      },
    });
  } catch (error) {
    res.status(500).json(error.message);
  }
};
