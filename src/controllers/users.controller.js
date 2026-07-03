import { asynchandler } from "../utils/asynchandler.js";

const registerUser = asynchandler(async (req, res) => {
  res.status(200).json({

    message: "register user",
  });
});

const loginUser = asynchandler(async (req, res) => {
  res.status(200).json({
  
    message: "login user",
  });
});

export { registerUser, loginUser };