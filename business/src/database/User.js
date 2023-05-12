import { Users } from '../models';

const getAllUser = async ({ email, page, limit }) => {
    try {
      let condition = {};
      if (email) condition = { email: { $regex: email, $options: 'i' } };
      const users = await Users.find(condition)
        .limit(limit * 1)
        .skip((page - 1) * limit);
      return users;
    } catch (e) {
      throw { status: 'INTERNAL_SERVER', message: e?.message || e };
    }
};

export default { getAllUser }