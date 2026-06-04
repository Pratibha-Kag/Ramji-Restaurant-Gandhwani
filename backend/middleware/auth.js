import jwt from "jsonwebtoken";

// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;
//   if (!token) {
//     return res.json({ success: false, message: "Not Authorized Login Again" });
//   }
//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);
//     req.body.userId = token_decode.id;
//     next();
//   } catch (error) {
//     console.log(error);
//     res.json({ success: false, message: "Error" });
//   }
// };
// export default authMiddleware;
// const authMiddleware = async (req, res, next) => {
//   const { token } = req.headers;

//   try {
//     const token_decode = jwt.verify(token, process.env.JWT_SECRET);

//     req.body.userId = token_decode.id; // error yahi hai

//     next();
//   } catch (error) {
//     console.log(error);
//   }
// };
// export default authMiddleware;
const authMiddleware = async (req, res, next) => {
  const { token } = req.headers;
  if (!token) {
    return res.json({
      success: false,
      message: "Not Authorized Login Again",
    });
  }
  try {
    const token_decode = jwt.verify(token, process.env.JWT_SECRET);
    console.log(token_decode);

    req.userId = token_decode.id; // ✅ SAFE PLACE
    next();
  } catch (error) {
    console.log(error);

    return res.json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default authMiddleware;
