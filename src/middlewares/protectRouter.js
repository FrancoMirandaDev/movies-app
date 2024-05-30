import jwt from "jsonwebtoken";

const protectRouter = (req, res, next) => {
  // Get the token from the request headers
  const token = req.headers["authorization"];

  // Check if token exists
  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    // Verify the token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log(decoded);

    // Attach the decoded user information to the request object
    req.id = decoded.id;

    // Call the next middleware
    next();
  } catch (err) {
    return res.status(401).json({ message: "Invalid token. Error:", err });
  }
};

export default protectRouter;
