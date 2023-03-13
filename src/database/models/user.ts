import {Schema, model} from "mongoose";

interface IUser{
    name : string,
    password : string,
    email : string,
    admin : boolean
}

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


