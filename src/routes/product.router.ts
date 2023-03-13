import { Router } from "express";
import ProductController from "../controllers/product.controller";
import { TokenValidate } from "../middlewares/validateToken.middleware";

const router = Router();
const controller = new ProductController();

router.get('/all', TokenValidate.login,  controller.getProducts);
router.get('/:id',TokenValidate.login, controller.getOneProduct);


export default router;