import { Users } from '../models';

const createUser = async (newUser) => {
  try {
    const user = await Users.create(newUser);
    await user.save();
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getAllUsers = async () => {
  try {
  } catch (e) {}
};

const getUser = async () => {
  try {
  } catch (e) {}
};

export default { createUser, getAllUsers, getUser };
