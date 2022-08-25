const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProduct = (callback) => {
  db.query('SELECT * FROM `product`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductById = (id, callback) => {
  db.query('SELECT * FROM `product` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createProduct = (data, callback) => {
  db.query(
    'INSERT INTO `product` (`id`, `name`,`longDesc`, `shortDesc`, `image`, `quantity`, `createdAt` , `updateAt`, `price`, `productCategoryId`, `discountId`) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.name,
      data.longDesc,
      data.shortDesc,
      data.image,
      data.quantity,
      new Date(),
      new Date(),
      data.price,
      data.productCategoryId,
      data.discountId,
    ],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProduct = (data, callback) => {
  db.query(
    'UPDATE `product` SET  `longDesc` = ?, `shortDesc` = ? , `image` = ?, `quantity` = ?, `updateAt` = ?, `price` = ? where id = ? ',
    [data.longDesc, data.shortDesc, data.image, data.quantity, new Date(), data.price, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProduct = (id, callback) => {
  db.query('DELETE FROM `product` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProduct,
  readProductById,
  createProduct,
  updateProduct,
  removeProduct,
};
