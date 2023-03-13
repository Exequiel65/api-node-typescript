import { Router } from "express";
import AuthController from "../controllers/auth.controller";

const router = Router();
const auth = new AuthController();


router.get('/user', auth.getUsuario)
router.post('/login', auth.processLogin)

export default router;