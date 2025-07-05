import uploadOnCloudinary from "../config/cloudinary.js";
import Product from "../model/productModel.js";
/* 
export const addProduct = async (req, res) => {
  try {
    let { name, description, price, category, subCategory, sizes, bestseller } =
      req.body;

    let image1 = await uploadOnCloudinary(req.files.image1[0].path);
    let image2 = await uploadOnCloudinary(req.files.image2[0].path);
    let image3 = await uploadOnCloudinary(req.files.image3[0].path);
    let image4 = await uploadOnCloudinary(req.files.image4[0].path);

    let productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: JSON.parse(sizes),
      bestseller: bestseller === "true" ? true : false,
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);

    return res.status(201).json(product);
  } catch (error) {
    console.log("AddProduct error");
    return res.status(500).json({ message: `AddProduct error ${error}` });
  }
}; */
export const addProduct = async (req, res) => {
    console.log("BODY ====>", req.body);
console.log("FILES ====>", req.files);
  try {
    const {
      name,
      description,
      price,
      category,
      subCategory,
      sizes,
      bestseller,
    } = req.body;
    

    // Optional: validate required fields
    if (
      !name ||
      !description ||
      !price ||
      !category ||
      !subCategory ||
      !sizes ||
      !req.files
    ) {
      return res
        .status(400)
        .json({ message: "All fields and images are required." });
    }

    // Optional: handle missing images gracefully
    const uploadImage = async (file) =>
      file ? await uploadOnCloudinary(file.path) : null;

    const image1 = await uploadImage(req?.files?.image1?.[0]);
    const image2 = await uploadImage(req?.files?.image2?.[0]);
    const image3 = await uploadImage(req?.files?.image3?.[0]);
    const image4 = await uploadImage(req?.files?.image4?.[0]);

    if (!image1 || !image2 || !image3 || !image4) {
      return res.status(400).json({ message: "All images are required." });
    }
    // Safe parse sizes
    let parsedSizes;
    try {
      parsedSizes = JSON.parse(sizes);
    } catch {
      return res
        .status(400)
        .json({
          message: 'Sizes must be a valid JSON array (e.g., ["S","M"]).',
        });
    }

    const productData = {
      name,
      description,
      price: Number(price),
      category,
      subCategory,
      sizes: parsedSizes,
      bestseller: bestseller === "true",
      date: Date.now(),
      image1,
      image2,
      image3,
      image4,
    };

    const product = await Product.create(productData);
    return res.status(201).json(product);
  } catch (error) {
    console.log("AddProduct error:", error.message);
    return res
      .status(500)
      .json({ message: "AddProduct error", error: error.message });
  }
};

export const listProduct = async (req, res) => {
  try {
    const product = await Product.find({});
    return res.status(200).json(product);
  } catch (error) {
    console.log("ListProduct error");
    return res.status(500).json({ message: `ListProduct error ${error}` });
  }
};

export const removeProduct = async (req, res) => {
  try {
    let { id } = req.params;
    const product = await Product.findByIdAndDelete(id);
    return res.status(200).json(product);
  } catch (error) {
    console.log("RemoveProduct error");
    return res.status(500).json({ message: `RemoveProduct error ${error}` });
  }
};
