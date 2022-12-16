import ProductModel from '../models/products.js';

// Get all products:
const getProducts = async () => {
    try {
        const products = await ProductModel.find();
        return products;
    } catch (error) {
        console.log(error.message);
    }
};

// Create a product:
const createProduct = async (pr) => {
    const product = pr;
    const newProduct = new ProductModel(product);
    try {
        await newProduct.save();
        console.log("Product added to DB");
    } catch (error) {
        console.log(error.message);
    }
};

export default {
    getProducts,
    createProduct,
};


