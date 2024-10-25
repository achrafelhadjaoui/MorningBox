import jwt from "jsonwebtoken";

const genrate_Token = (payload) => {
  const token = jwt.sign( {user:payload}, process.env.JWT_SECRET , { expiresIn: "1h" });
  return token
};

export default genrate_Token;
