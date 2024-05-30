import { generateToken } from "../utils/generateToken.js";
import jwt from "jsonwebtoken";

export const refresh = (req, res) => {
  //refresh token
  const token = req.headers["authorization"];
  console.log(token);
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const decoded = jwt.verify(token, "secret");
    console.log(decoded);
    const newToken = generateToken(decoded.id);
    res.json({
      message: `This is the new token: ${newToken}`,
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token. Error:", err });
  }
};

export const register = (req, res) => {
  // Generate a random token with id between 1 and 10
  const token = generateToken(Math.floor(Math.random() * 10) + 1);
  res.json({
    message: `This token expirate in 1 hour: ${token}`,
  });
};
