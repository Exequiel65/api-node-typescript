import { validationResult } from "express-validator";
import { httpStatus } from "../helpers/httpStatus";
import { Request, Response, NextFunction } from 'express'


class Validator {
  static validateFields(req: Request, res: Response, next: NextFunction) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(httpStatus.BAD_REQUEST).json(errors);
    };

    next();
  };
}

export default Validator;
