import { Schema, model } from 'mongoose';

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

export default model('Users', userSchema);