import userService from '../services/users.service';

const getAllUsers = async (req, res, next) => {
  try {
    const { email, page = 1, limit = 10 } = req.query;    
    const users = await userService.getAllUsers({ email, page, limit });
    res.status(200).json({ status: 'OK', data: users });
  } catch (err) {
    next(err);
  }
};

const createUser = async (req, res, next) => {
  const {
    body: { email, password },
  } = req;

  if (!email || !password) {
    const badRequestError = {
      status: 'BAD_REQUEST',
      message: 'The keys email and password are required for create a user',
    };
    next(badRequestError);
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
    next(err);
  }
};

const loginUser = async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    const error = {
      status: 'BAD_REQUEST',
      message: 'The keys email and password are required',
    };
    next(error);
    return;
  }

  try {
    const user = {
      email,
      password,
    };
    const loginUser = await userService.loginUser(user);
    res.status(200).json({ status: 'OK', data: loginUser });
  } catch (err) {
    next(err);
  }
};

export { getAllUsers, createUser, loginUser };
