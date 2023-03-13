import { model, Schema } from 'mongoose';
import { IProduct } from '../../interface/product.interface';


const productSchema = new Schema<IProduct>({
    name :{
        type : String,
        required : true
    },
    description : {
        type : String
    },
    price : {
        type : Number,
        required : true
    },
    images : [{
        type : String
    }],
    categorie : [
        {
            type : String
        }
    ],
    stock : {
        type : Number
    }
}, { timestamps : true});

export const productModel = model('Product', productSchema);


