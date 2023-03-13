import express, {Application} from 'express';
import cors from 'cors';
import MongoDb from './src/database/config/conecctionMongo';


import indexRouter from './src/routes/index.router'
import authRouter from './src/routes/auth.router'

export class Server{
    private app: Application;
    private port : String;
    
    private apiPaths = {
        api : '/api',
        auth : '/api/auth',
    }
    constructor(){
        this.app = express();
        this.port = process.env.PORT || '8000';
        this.dbConnectionMongo();
        this.middlewares();
        this.routes();
    }

    async dbConnectionMongo(){
        try {
            await MongoDb();
        } catch (error) {
            console.log(error)
            throw new Error();
        }
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({ extended : false}))
        this.app.use(express.static('public'));

    }

    routes(){
        this.app.use(this.apiPaths.api, indexRouter)
        this.app.use(this.apiPaths.auth, authRouter)
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log('Servidor corriendo en el puerto: ' + this.port + `\nhttp://localhost:${this.port}`);
        })
    }
}
