const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductImage = (callback) => {
  db.query('SELECT * FROM `productImage`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductImageById = (id, callback) => {
  db.query('SELECT * FROM `productImage` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createProductImage = (data, callback) => {
  db.query(
    'INSERT INTO `productImage` (`id`, `url`, `createdAt` , `updateAt`, `productId`) VALUES (?,?,?,?,?)',
    [uuidv4(), data.url, new Date(), new Date(), data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductImage = (data, callback) => {
  db.query(
    'UPDATE `productImage` SET  `url` = ? , `updateAt` = ? where id = ? ',
    [data.url, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductImage = (id, callback) => {
  db.query('DELETE FROM `productImage` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductImage,
  readProductImageById,
  createProductImage,
  updateProductImage,
  removeProductImage,
};
