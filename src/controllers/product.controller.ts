import { Request, Response } from 'express';
import productRepository from '../repository/product.repository';
import { httpStatus } from '../helpers/httpStatus';


const product = new productRepository();

class ProductController{

    async getProducts(req: Request, res:Response){
        try {
            let list = await product.getListProduct();
            return res.status(httpStatus.OK).json({
                product : list
            })

        } catch (error) {
            console.log(error)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }
    }

    async getOneProduct(req: Request, res:Response){
        let idParam = req.params.id 
        try {
            let prod = await product.getProduct({_id: idParam})
            if (!prod) {
                return res.status(httpStatus.BAD_REQUEST).json({
                    msg : 'Product not found'
                })
            }
            return res.status(httpStatus.OK).json({
                product : prod
            })
        } catch (error) {
            console.log(error)
            return res.status(httpStatus.INTERNAL_SERVER_ERROR).json({
                msg : 'Something went wrong, the server was unable to complete your request'
            })
        }

    }

    
}

export default ProductController