import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
  sub: string;
}

export function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const tokenHeader = request.headers.authorization;

  if (!tokenHeader) {
    return response.status(401).json({ error: "Token not found" });
  }

  const [, token] = tokenHeader.split(" ");

  try {
    const { sub } = verify(
      token,
      "7423d88f7a7ee853ec44d22ec03caf6c"
    ) as IPayload;

    request.user_id = sub;

    return next();
  } catch (error) {
    return response
      .status(401)
      .json({ error: `Invalid Token, ${error.message}` });
  }
}
