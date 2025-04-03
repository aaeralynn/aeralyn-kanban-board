import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface JwtPayload {
  username: string; // Adjust this based on your JWT payload structure
  exp?: number; // Optional, as expiration may not always be present
}

export const authenticateToken = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
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

  jwt.verify(token, secret, (err, user: JwtPayload | undefined) => {
    // Use JwtPayload here
    if (err) {
      return res.sendStatus(403); // Forbidden if token is invalid
    }
    req.user = user; // Add user data to request object
    next(); // Proceed to the next middleware
  });
};
