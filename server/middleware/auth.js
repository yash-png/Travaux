import jwt from "jsonwebtoken";
import User from "../models/user.js";

const generateAuthToken = async (user) => {
  const data = user;
  // console.log(data);
  const token = await jwt.sign({ id: data._id }, "iamsecretkey");
  console.log(token);
  return token;
};

// jwt token --> payload , header, signature

const auth = async (req, res, next) => {
  const token = await req.cookies["jwt"];
  // console.log(token);
  const decoded = jwt.verify(token, "iamsecretkey");
  console.log(decoded);
  const user = await User.findById({ _id: decoded.id });
  console.log(user);

  try {
    const valid = await jwt.verify(token, "iamsecretkey");
    console.log(valid);
    if (valid) {
      console.log("valid");
      req.user = user;
      next();
    } else {
      console.log("invalid");
    }
  } catch (e) {
    return res.status(401).json({ err: "Invalid token" });
  }
};
export { generateAuthToken, auth };

app.get("/", auth, (req, res) => {
  //   const user = req.user;
  res.send("Hello");
});
