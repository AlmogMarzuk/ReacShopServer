import cartModel from '../models/cart.js';
import ProductModel from '../models/products.js';



const getCart = async () => {
    const cart = await cartModel.find()
        .populate('cartItems')
        .catch((err) => {
            console.log(err.message);
        });
    console.log("Cart fetched");
    return cart;
}

const deleteCart = async () => {
    try {
        await cartModel.updateOne({}, { $set: { cartItems: [], totalPrice: 0, totalQuantity: 0 } });
        console.log("Cart deleted");
    } catch (error) {
        console.log(error.message);
    }
}

const addToCart = async (product) => {
    const pr = await ProductModel.findById(product.product._id).catch((err) => {
        console.log(err.message);
    });
    const cart = await cartModel.findOne().catch((err) => {
        console.log(err.message);
    });
    if (cart) {
        const index = cart.cartItems.findIndex((p) => p._id.toString() === pr._id.toString());
        if (index === -1) {
            cart.cartItems.push(pr);
        }
        else {
            ProductModel.findOneAndUpdate({ _id: pr._id }, { $inc: { "quantity": +1 } }, { new: true }, (err, doc) => {
                if (err) {
                    console.log(err.message);
                }
            });

        }
        cart.totalPrice += pr.price;
        cart.totalQuantity += 1;
        await cart.save();
        console.log("Product added to cart");
    } else {
        const newCart = new cartModel({
            cartItems: [pr],
            totalPrice: pr.price,
            totalQuantity: 1,
        });
        await newCart.save();
        console.log("Cart created");
    }
}


export default {

    addToCart,
    getCart,
    deleteCart,
}
