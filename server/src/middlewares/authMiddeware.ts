import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import path from "path";
import dotenv from "dotenv";
dotenv.config({ path: path.join(__dirname, "..", ".env") });

const secretKey = process.env.secretKey as string;

export interface AuthenticatedRequest extends Request {
  user?: any;
}

const authMiddleware = (
  req: AuthenticatedRequest,
  res: Response,
  next: NextFunction
) => {
  if (req.method === "OPTIONS") {
    console.log("0");
    return next();
  }

  try {
    // const auth = req.body.token;
    // if (!auth) {
    //   console.log("1");
    //   return res.status(401).json({ message: "Auth error" });
    // }

    const token = req.body.jwtkey;
    console.log(req.body);
    if (!token) {
      console.log(token);
      return res.status(401).json({ message: "Token error", token });
    }

    const decoded = jwt.verify(token, secretKey);
    req.user = decoded;
    console.log("3");
    next();
  } catch (e) {
    console.log("4");
    return res.status(401).json({ message: "Unexpected error", e: req.body });
  }
};

export default authMiddleware;
