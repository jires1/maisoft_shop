const { Router } = require('express');
const {
  getAllProductGategory,
  getProductGategoryById,
  postProductGategory,
  patchProductGategory,
  deleteProductGategory,
} = require('../controllers/productGategory');

const router = Router();

router.get('/', getAllProductGategory);
router.get('/:id', getProductGategoryById);
router.post('/', postProductGategory);
router.patch('/', patchProductGategory);
router.delete('/:id', deleteProductGategory);

module.exports = router;
