const { Router } = require('express');
const { getAllWishlist, getWishlistById, postWishlist, deleteWishlist } = require('../controllers/wishlist');

const router = Router();

router.get('/', getAllWishlist);
router.get('/:id', getWishlistById);
router.post('/', postWishlist);
router.delete('/:id', deleteWishlist);

module.exports = router;
