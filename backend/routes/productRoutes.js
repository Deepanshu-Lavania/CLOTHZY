import express from 'express'
import { addProduct, listProduct, removeProduct } from '../controller/productController.js'
import upload from '../middleware/multer.js'
import adminAuth from "../middleware/adminAuth.js"
// import upload from "../middleware/multer.js"


let productRoutes = express.Router()

//uplaod image into "upload folder"
// authRoutes.post("./public/upload", upload.single("image"), (req, res) => {
//   if (!req.file) {
//     return res.status(400).json({ message: "No file uploaded" });
//   }
//   res.status(200).json({
//     message: "Image uploaded successfully",
//     file: req.file,
//   });
// });

//upload images into cloudnary
// router.post("./public/upload", upload.single("image"), async (req, res) => {
//   const cloudUrl = await uploadOnCloudinary(req.file.path);
//   res.json({ url: cloudUrl });
// });

productRoutes.post("/addproduct",upload.fields([
    {name:"image1",maxCount:1},
    {name:"image2",maxCount:1},
    {name:"image3",maxCount:1},
    {name:"image4",maxCount:1}]),addProduct)

productRoutes.get("/list", listProduct) 
productRoutes.post("/remove/:id",adminAuth,removeProduct)



export default productRoutes