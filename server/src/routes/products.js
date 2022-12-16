
import express from 'express';
import productController from '../controllers/productController.js';
const router = express.Router();

router.get('/add-to-db', productController.addToDB);
router.get("/data", productController.getData);

export default router;