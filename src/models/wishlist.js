const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readWishlist = (callback) => {
  db.query('SELECT * FROM `wishlist`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readWishlistById = (id, callback) => {
  db.query('SELECT * FROM `wishlist` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createWishlist = (data, callback) => {
  db.query(
    'INSERT INTO `wishlist` (`id`, `customerId`, `productId`) VALUES (?,?,?)',
    [uuidv4(), data.customerId, data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeWishlist = (id, callback) => {
  db.query('DELETE FROM `wishlist` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readWishlist,
  readWishlistById,
  createWishlist,
  removeWishlist,
};
