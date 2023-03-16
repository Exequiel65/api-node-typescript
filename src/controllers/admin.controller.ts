import { Request, Response } from "express";
import path from 'path'


class AdminController{

    static index(req:Request, res: Response){
        res.sendFile(path.join(__dirname, '../../public/index.html'))
    }


};

export default AdminController