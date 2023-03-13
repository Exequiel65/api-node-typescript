import { Request, Response } from "express";


class indexController{

    static index(req:Request, res: Response){
        res.json({
            msg: "server api only"
        })
    }


};

export default indexController