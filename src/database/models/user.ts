import {Schema, model} from "mongoose";
import { IUser } from '../../interface/user.interface';



const userSchema = new Schema<IUser>({
    name: {
      type: String,
      required: true,
    },
    password : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    admin : {
        type : Boolean,
        default : false
    }
  },{
    timestamps : true
  });
  
export const userModel = model<IUser>("User", userSchema);


