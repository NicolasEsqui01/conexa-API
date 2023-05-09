import userService from "../services/business.service";

const getAllUsers = async (req, res, next) => {
  try {
    const { email, page, limit } = req.query;
    const users = await userService.getAllUsers({ email, page, limit });
    res.status(200).json({ status: "OK", data: users });
  } catch (err) {
    res.status(err?.status || 500).json({
      status: "FAILED",
      data: { error: err?.message || "" }
    });
  }
};

export { getAllUsers };
