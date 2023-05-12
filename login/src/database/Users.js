import { Users } from '../models';
import { compare } from 'bcrypt';

const createUser = async (newUser) => {
  try {
    const getUserbyEmail = await Users.findOne({ email: newUser.email });

    if (getUserbyEmail) {
      throw {
        status: 'BAD_REQUEST',
        message: `There is a user with this email address ${newUser.email}`,
      };
    }

    const user = await Users.create(newUser);
    await user.save();
    return user;
  } catch (error) {
    throw {
      status: error?.status || 'INTERNAL_SERVER',
      message: error?.message || error
    };
  }
};

const getUser = async (user) => {
  try {
    const getUserbyEmail = await Users.findOne({ email: user.email });
    if (!getUserbyEmail) {
      throw {
        status: 'NOT_FOUND',
        message: `The user does not exist with this email address ${user.email}`,
      };
    }

    const comparePassword = await compare(
      user.password,
      getUserbyEmail.password
    );
    if (!comparePassword)
      throw { status: 'BAD_REQUEST', message: 'Password incorrect' };
    delete getUserbyEmail._doc.password;
    return getUserbyEmail._doc;
  } catch (e) {
    throw { status: e?.status || 'INTERNAL_SERVER', message: e?.message || e };
  }
};

export default { createUser, getUser };
