import jwt from "jsonwebtoken";

export const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1]; // Get token from Authorization header

  if (!token) {
    return res.sendStatus(401); // Unauthorized if no token is provided
  }

  const secret = process.env.JWT_SECRET;
  if (!secret) {
    return res
      .status(500)
      .send("Internal Server Error: JWT secret is not defined.");
  }

  jwt.verify(token, secret, (err, user) => {
    // Verify the token
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.user = user; // Add user data to request object
    next(); // Proceed to the next middleware
  });
};
