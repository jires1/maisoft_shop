const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductDetail = (callback) => {
  db.query('SELECT * FROM `productDetail`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductDetailById = (id, callback) => {
  db.query('SELECT * FROM `productDetail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createProductDetail = (data, callback) => {
  db.query(
    'INSERT INTO `productDetail` (`id`, `size`, `age`, `gender` , `color`, `branch`, `productId`) VALUES (?,?,?,?,?,?,?)',
    [uuidv4(), data.size || 'S', data.age, data.gender, data.color, data.branch, data.productId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductDetail = (data, callback) => {
  db.query(
    'UPDATE `productDetail` SET  `size` = ?, `age` = ? , `gender` = ? , `color` = ?, `branch` = ? where id = ? ',
    [data.size, data.age, data.gender, data.color, data.branch, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductDetail = (id, callback) => {
  db.query('DELETE FROM `productDetail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
};
