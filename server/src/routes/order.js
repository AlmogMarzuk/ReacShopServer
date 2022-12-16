import Express from "express";
import orderController from '../controllers/orderController.js';
const router = Express.Router();

router.post("/add-order", orderController.createOrder);
router.get("/orders", orderController.getOrders);

export default router;

