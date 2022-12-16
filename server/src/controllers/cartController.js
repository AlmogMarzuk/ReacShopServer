import cartService from '../services/cartService.js';


const getCart = async (req, res) => {
    try {
        const cart = await cartService.getCart();
        res.status(200).json(cart);
    } catch (error) {
        res.status(404).json({ message: error.message, success: false });
    }
};



const addToCart = (req, res) => {
    const product = req.body;
    cartService.addToCart(product);
    res.status(203).json(product);
};

const deleteCart = (req, res) => {
    cartService.deleteCart().catch((err) => {
        res.status(404).json({ message: err.message, success: false });
    });
    res.status(200).json({ message: "Cart deleted", success: true });
};


export default {
    addToCart,
    getCart,
    deleteCart
}

