import { Router } from 'express';
import { getAllUsers } from '../controllers/business.controller'

const router = Router();

router.get('/', getAllUsers)

export default router