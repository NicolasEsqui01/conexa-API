import { Router } from 'express';
import {
  getAllUsers,
  createUser,
  loginUser,
} from '../controllers/users.controller';

const router = Router();

router.get(['/', '/:email'], getAllUsers);
router.post('/', createUser);
router.post('/login', loginUser);

export default router;
