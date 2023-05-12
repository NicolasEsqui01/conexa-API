import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  loginUser,
} from '../controllers/users.controller';
import { verifyToken } from '../middleware/auth';

const router = Router();

router.get('/', verifyToken, getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);

export default router;
