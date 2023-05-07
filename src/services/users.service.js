import User from '../database/Users';
import { v4 as uuid } from 'uuid';

const getAllUsers = () => {};

const createUser = (newUser) => {
  const userToInsert = {
    ...newUser,
    id: uuid(),
    createdAt: new Date().toLocaleString('es-AR', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('es-AR', { timeZone: 'UTC' }),
  };
  try {
    const createdUser = User.createUser(userToInsert);
    return createdUser;
  } catch (e) {
    throw e;
  }
};

const loginUser = () => {};

export default { getAllUsers, createUser, loginUser };
