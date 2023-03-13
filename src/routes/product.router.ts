import { Router } from "express";
import ProductController from "../controllers/product.controller";

const router = Router();
const controller = new ProductController();

router.get('/all', controller.getProducts);
router.get('/:id', controller.getOneProduct);


export default router;