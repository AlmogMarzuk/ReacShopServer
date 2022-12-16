import productServies from '../services/productService.js';
import { Data } from '../../data.js';



const getData = async (req, res) => {
    const products = await productServies.getProducts().catch((err) => {
        res.status(404).json({ message: err.message, success: false });
    });
    res.status(200).json(products);
}



const addToDB = async (req, res) => {
    try {
        Data.map((product) => {
            productServies.createProduct(product);
        });
        res.status(203).json({ message: "Products added to DB", success: true });
    } catch (error) {
        res.status(404).json({ message: error.message, success: false });
    }
}


export default {
    getData,
    addToDB
};


