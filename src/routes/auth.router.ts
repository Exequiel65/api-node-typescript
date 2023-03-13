import { Router } from "express";
import AuthController from "../controllers/auth.controller";
import Validator from "../middlewares/validateFields.middleware";
import { login, register } from "../validator/auth.validation";

const router = Router();
const auth = new AuthController();


router.get('/user', auth.getUsuario)
router.post('/login',login, Validator.validateFields, auth.processLogin)
router.post('/register',register, Validator.validateFields, auth.processRegister)

export default router;