import { Users } from '../models';
import { compare } from 'bcrypt';

const createUser = async (newUser) => {
  try {
    const user = await Users.create(newUser);
    await user.save();
    return user;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const getAllUsers = async ({ email, page, limit }) => {
  try {
    let condition = {};
    if (email) condition = { email: { $regex: email, $options: 'i' } };
    const users = await Users.find(condition)
      .limit(limit * 1)
      .skip((page - 1) * limit);
    return users;
  } catch (e) {
    throw { status: 500, message: e?.message || e };
  }
};

const getUser = async (user) => {
  try {
    const getUserbyEmail = await Users.findOne({ email: user.email });
    if (!getUserbyEmail) {
      throw {
        status: 400,
        message: 'User does not exist with this email address',
      };
    }

    const comparePassword = await compare(
      user.password,
      getUserbyEmail.password
    );

    if (comparePassword) {
      throw { status: 400, message: 'Password incorrect' };
    }
    delete getUserbyEmail._doc.password;
    return getUserbyEmail._doc;
  } catch (e) {
    throw { status: e?.status || 500, message: e?.message || e };
  }
};

export default { createUser, getAllUsers, getUser };
