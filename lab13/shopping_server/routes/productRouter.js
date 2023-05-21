const express = require('express');
const productController = require('../controllers/productController');

const router = express.Router();

router.post('/', productController.save);
router.get('/', productController.getAll);
router.get('/:title', productController.getByTitle);
router.put('/:productId', productController.edit);
router.delete('/:productId', productController.deleteById);

module.exports = router;