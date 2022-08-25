const { Router } = require('express');
const {
  getAllDiscount,
  getDiscountById,
  postDiscount,
  patchDiscount,
  deleteDiscount,
} = require('../controllers/discount');

const router = Router();

router.get('/', getAllDiscount);
router.get('/:id', getDiscountById);
router.post('/', postDiscount);
router.patch('/', patchDiscount);
router.delete('/:id', deleteDiscount);

module.exports = router;
