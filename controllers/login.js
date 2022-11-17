import express from "express"
const router = express.Router();
import bcrypt from "bcrypt"
import User from "../models/userSchema.js"

router.post("/", async (req, res) => {
  try {
    const userExist = await User.findOne({ username: req.body.username });
 
    const checkUser = await bcrypt.compare(
      req.body.password,
      userExist.password
    )
    if (!checkUser) throw Error
     res.status(200).json({checkUser});
  } catch {
    res.status(400).json({ err: "wrong username or password" });

  }
  // try {
   
  // } catch {
  //   res.status(400).json({ err: "wrong password" });
  // }
});

// => {
//   if (err) {
//     console.log(err);
//   } else {
//     if (userInfo) {
//       if (bcrypt.compareSync(req.body.password, userInfo.password)) {
//         req.session.currentUser = userInfo;
//         res.status(200).json({ userInfo });
//       } else {
//         console.log("wrong username or password");
//         res.status(400).json({ err: err.message });
//       }
//     }
//   }
// });

export default router;
