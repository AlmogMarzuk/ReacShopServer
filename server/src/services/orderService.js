import OrderModel from '../models/order.js';

const getOrders = async () => {
    const orders = await OrderModel.find();
    return orders;
}

const createOrder = async (order) => {
    const newOrder = new OrderModel({
        orderItems: order.orderItems,
        name: order.name,
        email: order.email,
        address: order.address,
        phone: order.phone,
        total: order.total
    });
    await newOrder.save().then(() => {
        console.log("Order created");
    });
    return newOrder;
}

export default {
    getOrders,
    createOrder
}

