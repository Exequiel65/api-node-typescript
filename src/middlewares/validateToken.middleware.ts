import { NextFunction, Request, Response } from 'express';
import { httpStatus } from '../helpers/httpStatus';
import { jwtToken } from '../helpers/jwt';
const jwt = new jwtToken();

export class TokenValidate{

    static async login(req: Request, res: Response, next: NextFunction){
        const user = await jwt.getBearer(req.headers.authorization)
        if (!user) {
            return res.status(httpStatus.UNAUTHORIZED).json({
                msg: 'Access denied, token expire or incorrect'
            })
        }
        next()
    }
}

