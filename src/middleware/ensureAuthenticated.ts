import { Request, Response, NextFunction } from "express";
import { JwtPayload, verify } from "jsonwebtoken";

export function ensureAuthenticated(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authToken = req.headers.authorization;

  if (!authToken)
    return res.status(401).json({
      message: "invalid token!",
      errorCode: "token.invalid",
    });

  const [, token] = authToken.split(" ");

  try {
    const { sub } = verify(token, process.env.JWT_SECRET!) as JwtPayload;
    if (!sub) throw Error("token.invalid");

    req.user_id = sub;

    return next();
  } catch (err) {
    return res.status(401).json({
      message: "token malformed or expired!",
      errorCode: "token.expired",
    });
  }
}
