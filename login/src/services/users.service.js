import User from '../database/Users';
import { v4 as uuid } from 'uuid';
import { createToken } from '../middleware/auth';

const getAllUsers = async ({ email, page, limit }) => {
  try {
    const users = await User.getAllUsers({ email, page, limit });
    return users;
  } catch (err) {
    throw err;
  }
};

const createUser = async (newUser) => {
  const userToInsert = {
    ...newUser,
    id: uuid(),
    createdAt: new Date().toLocaleString('es-AR', { timeZone: 'UTC' }),
    updatedAt: new Date().toLocaleString('es-AR', { timeZone: 'UTC' }),
  };
  try {
    const createdUser = await User.createUser(userToInsert);
    return createdUser;
  } catch (e) {
    throw e;
  }
};

const loginUser = async (user) => {
  try {
    const getUser = await User.getUser(user);
    const payload = Object.assign({}, getUser);
    const token = createToken(payload);
    const result = {
      _id: getUser._id,
      email: getUser.email,
      token,
    };

    return result;
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers, createUser, loginUser };
