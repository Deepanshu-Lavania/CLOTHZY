import express from "express"
import { adminLogin, googleLogin, login, logOut, registration } from "../controller/authController.js"
// import upload from "../middleware/multer.js"


const authRoutes = express.Router()

authRoutes.post("/registration",registration)
authRoutes.post("/login",login)
authRoutes.get("/logout",logOut)
authRoutes.post("/googlelogin",googleLogin)
authRoutes.post("/adminlogin",adminLogin)   

// authRoutes.post("./public/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   res.status(200).json({
//     message: "Image uploaded successfully",
//     file: req.file,
//   });
// });


export default authRoutes