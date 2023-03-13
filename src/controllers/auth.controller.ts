import { Request, Response } from "express";
import { userModel } from "../database/models/user";
import { compareSync, hashSync} from "bcryptjs";
import { jwtToken } from '../helpers/jwt';

const jwt = new jwtToken();

class AuthController{
    async getUsuario(req: Request, res: Response){
        let user: any;
        try {
            user = await userModel.find({});
        } catch (error) {
            console.log(error)
            throw new Error()
        }

        res.json({
            user
        })
    }

    async processLogin(req: Request, res: Response){
        let {email, password} = req.body;
        let user : any;

        try {
            user = await userModel.findOne({email});
        } catch (error) {
            return res.status(500).json({
                msg: error
            })
        }

        if (!user) {
            return res.status(400).json({
                msg : 'User not found'
            })
        }

        if (!compareSync(password, user.password)) {
            return res.status(400).json({
                msg : 'Credentials incorrect'
            })
        }
        let token = jwt.tokenSign(user)
        return res.status(200).json({
            msg : 'Successful login',
            token : token,
            user
        })
        
    }
}


export default AuthController;