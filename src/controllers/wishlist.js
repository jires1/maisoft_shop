const { readWishlist, readWishlistById, createWishlist, removeWishlist } = require('../models/wishlist');

const getAllWishlist = (req, res) => {
  readWishlist((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Wishlists: result });
    }
  });
};

const getWishlistById = (req, res) => {
  const id = req.params.id;
  readWishlistById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Wishlists: result });
    }
  });
};

const postWishlist = (req, res) => {
  const data = req.body;
  console.log(data);

  createWishlist(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Wishlists: result });
    }
  });
};

const deleteWishlist = (req, res) => {
  const id = req.params.id;
  removeWishlist(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Wishlist deleted !' });
    }
  });
};

module.exports = {
  getAllWishlist,
  getWishlistById,
  postWishlist,
  deleteWishlist,
};
