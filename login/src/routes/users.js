import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  loginUser,
} from '../controllers/users.controller';
import { verifyToken } from '../middleware/auth';
import { callInternal } from '../middleware/call';

const router = Router();

router.get('/', verifyToken, callInternal);
router.get('/all', getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);

export default router;
