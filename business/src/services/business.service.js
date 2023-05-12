import User from '../database/User';

const getAllUsers = async ({ email, page, limit }) => {
  try {
    const users = await User.getAllUser({ email, page, limit });
    return users;
  } catch (err) {
    throw err;
  }
};

export default { getAllUsers }
