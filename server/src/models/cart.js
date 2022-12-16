import mongoose from "mongoose";


const cartSchema = new mongoose.Schema({
    cartItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
    }],
    totalPrice: {
        type: Number,
        default: 0
    },
    totalQuantity: {
        type: Number,
        default: 0
    }

});

export default mongoose.model("Cart", cartSchema);