import { productModel } from "../database/models/product";
import { IProduct } from '../interface/product.interface';


class productRepository{
    private _product : typeof productModel;

    constructor(){
        this._product = productModel;
    }

    async getListProduct(){
        try {
            let product = await this._product.find({});
            return product;
        } catch (error) {
            console.log(error)
            throw new Error('Error getting data')
        }
    }

    async getProduct(data: Object){
        try {
            let product = await this._product.findOne(data);
            return product
        } catch (error) {
            console.log(error)
            throw new Error('Error searching product')
        }
    }

    async createProduct(data : IProduct){
        try {
            let product = new this._product(data)
            product.save();
            
            return product
        } catch (error) {
            console.log(error)
            throw new Error("Error create new product");
        }
    }

    async createManyProduct(data: IProduct[] ){
        try {
            let products = await this._product.create(data)
            return products
        } catch (error) {
            console.log(error)
            throw new Error('Error create list product')
        }
    }

    async deleteProduct(data: string){
        try {
            let product = await this._product.deleteOne({_id : data})
            return product
        } catch (error) {
            console.log(error)
            throw new Error('Error delete product')            
        }
    }
}

export default productRepository