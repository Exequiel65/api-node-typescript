import { Request, Response } from "express";
import { compareSync, hashSync} from "bcryptjs";
import { jwtToken } from '../helpers/jwt';
import { httpStatus } from "../helpers/httpStatus";
import { UserRepository } from '../repository/user.repository';
import { IUser } from '../interface/user.interface';

const userRepository = new UserRepository();
const jwt = new jwtToken();

class AuthController{
    async getUsuario(req: Request, res: Response){
        let user: any;
        try {
            user = await userRepository.getUser({});
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
            user = await userRepository.getUser({email})
        } catch (error) {
            console.log(error)
            return res.status(500).json({
                msg: 'Something went wrong, the server was unable to complete your request'
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

    async processRegister(req: Request, res:Response){
        let {name, password, email, admin} = req.body;

        let user: IUser = {
            name,
            password: hashSync(password, 10),
            email : email.trim(),
            admin : admin ? admin : false
        }

        try {
            let existUser = await userRepository.searchFastUser({email});
            if (existUser) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    msg : 'Email is register'
                })
            }
            user = await userRepository.createUser(user)
        } catch (error) {
            console.log(error)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg: 'Something went wrong, the server was unable to complete your request'
            })
        }

        let token = jwt.tokenSign(user);
        res.status(httpStatus.CREATED).json({
            msg : 'User succesfelly created',
            token,
            user
        })


    }
}


export default AuthController;