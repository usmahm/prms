import { Request, Response, NextFunction } from "express";

export interface AppError extends Error {
  status?: number;
}

export const errorHandler = (
  err: AppError,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  console.error("Error_Handler", err);
  res.status(err.status || 500).json({
    message: err.message || "Internal Server Error"
  });
};
