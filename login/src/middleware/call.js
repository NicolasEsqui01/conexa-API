import env from '../config/environment';

export const callInternal = (req, res, next) => {
  const { email, page = 1, limit = 10 } = req.query;
  let url = `${env.INTERNAL_URL}?page=${page}&limit=${limit}`;
  if (email) url += `&email=${email}`;
  res.redirect(url);
};
