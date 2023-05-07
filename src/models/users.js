import { Schema, model } from 'mongoose';
import { hashSync } from 'bcrypt';
import env from '../config/environment';

const userSchema = new Schema(
  {
    email: { type: 'String', required: true, unique: true },
    password: { type: 'String', required: true },
  },
  { timestamps: true }
);

userSchema.pre('save', async function (next) {
  this.password = await hashSync(this.password, env.SALT);
  next();
});

export default model('Users', userSchema);
