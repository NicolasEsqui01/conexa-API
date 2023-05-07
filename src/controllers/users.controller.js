import userService from '../services/users.service';
import logger from '../config/logger';

const getAllUsers = async (req, res, next) => {};

const createUser = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  if (!email || !password) {
    res.status(400).json({
      status: 'FAILED',
      data: { error: 'The keys email and password are required' },
    });
    return;
  }

  const newUser = {
    email,
    password,
  };
  try {
    const createdUser = await userService.createUser(newUser);
    res.status(201).json({ status: 'OK', data: createdUser });
  } catch (err) {
    console.error(err);
    res.status(err?.status || 500).json({
      status: 'INTERNAL_SERVER',
      message: err?.message || 'There was an error in the created from user',
    });
  }
};

const loginUser = async (req, res, next) => {};

export { getAllUsers, createUser, loginUser };
