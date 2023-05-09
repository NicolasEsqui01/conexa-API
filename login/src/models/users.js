import { Schema, model } from 'mongoose';
import { hash } from 'bcrypt';
import env from '../config/environment';

const userSchema = new Schema(
  {
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
  },
  { timestamps: true }
);

userSchema.methods.toJSON = function () {
  const user = this;
  delete user._doc.password;
  return user._doc;
};

userSchema.pre('save', async function (next) {
  this.password = await hash(this.password, env.SALT);
  i;
  next();
});

export default model('Users', userSchema);
