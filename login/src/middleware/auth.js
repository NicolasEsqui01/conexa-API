import jwt from 'jsonwebtoken';
import env from '../config/environment';

export const createToken = function (payload) {
  return jwt.sign({ ...payload }, env.JWT_SECRET, {
    expiresIn: env.JWT_EXPIRE,
  });
};

export const decodeToken = function (token) {
  return jwt.decode(token);
};

export const verifyToken = async function (req, res, next) {
  const token = req.headers.authorization || req.query.token;

  if (!token) return next(new Error({ status: '', data: { error: '' } }));

  const decoded = await jwt.verify(token, env.JWT_SECRET);
  if (!decoded) {
    return next(
      new Error({ status: '', data: { error: decoded?.message || '' } })
    );
  }
  req.user = decoded;
  next();
};
