import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
    orderItems: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: true
    }],
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    dateCreated: {
        type: Date,
        default: Date.now
    },
    total: {
        type: Number,
        required: true
    }
}, { timestamps: true });

export default mongoose.model("Order", orderSchema);