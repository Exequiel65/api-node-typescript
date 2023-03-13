import { userModel } from '../database/models/user';
import { IUser } from '../interface/user.interface';


export class UserRepository{
    private _user : typeof userModel;

    constructor(){
        this._user = userModel;
    }

    async getUser(data: Object){
        try {
            let user = await this._user.findOne(data);
            return user
        } catch (error) {
            console.log(error)
            throw new Error('Error searching user');            
        }
    }

    async createUser(data: IUser){
        try {
            let user = new this._user(data);
            await user.save();
            return user;
        } catch (error) {
            console.log(error);
            throw new Error('Error creating new user')
        }
    }

    async searchFastUser(data: Object){
        try {
            let user = this._user.findOne(data).lean()
            return user
        } catch (error) {
            console.log(error)
            throw new Error('Error searching user')
        }
    }

}