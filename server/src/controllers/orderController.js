import orderService from '../services/orderService.js';

const createOrder = async (req, res) => {
    try {
        const order = await orderService.createOrder(req.body);
        res.status(203).json(order);
    } catch (error) {
        res.status(404).json({ message: error.message, success: false });
    }
}

const getOrders = async (req, res) => {
    try {
        const orders = await orderService.getOrders();
        res.status(200).json(orders);
    } catch (error) {
        res.status(404).json({ message: error.message, success: false });
    }
}

export default {
    createOrder,
    getOrders
}