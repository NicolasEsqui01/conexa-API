import { Router } from "express";
import business from './business.routes';

const router = Router();

router.use('/business', business);

export default router