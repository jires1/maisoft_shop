const { Router } = require('express');
const { getAllProduct, getProductById, postProduct, patchProduct, deleteProduct } = require('../controllers/product');

const router = Router();

router.get('/', getAllProduct);
router.get('/:id', getProductById);
router.post('/', postProduct);
router.patch('/', patchProduct);
router.delete('/:id', deleteProduct);

module.exports = router;
