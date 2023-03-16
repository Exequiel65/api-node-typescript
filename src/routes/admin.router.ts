import { Router } from "express";
import AdminController from "../controllers/admin.controller";

const router = Router();


router.get('/', AdminController.index)

export default router;