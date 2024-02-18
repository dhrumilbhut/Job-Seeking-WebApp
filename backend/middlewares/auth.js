import { User } from "../models/userSchema.js";
import { catchAsyncErrors } from "./catchAsyncError.js";
import ErrorHandler from "./error.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = catchAsyncErrors(async (req, res, next) => {
  if (req.session && req.session.userId) {
    req.user = await User.findById(req.session.userId);
    next();
  } else {
    next(new ErrorHandler("Please login to access this resource.", 401));
  }
});
