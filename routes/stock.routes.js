const express  =  requre('express');
const router = express.router();
const StockController = require('../controllers/stock.controller');

router.get('/',StockController.obtenerTodos);
router.put('/',StockController.actualizarStockPorProducto)

module.exports = router;