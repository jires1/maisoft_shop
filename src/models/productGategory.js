const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readProductGategory = (callback) => {
  db.query('SELECT * FROM `productCategory`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readProductGategoryById = (id, callback) => {
  db.query('SELECT * FROM `productCategory` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createProductGategory = (data, callback) => {
  db.query(
    'INSERT INTO `productCategory` (`id`, `name`, `desc`, `createdAt` , `updateAt`, `image`) VALUES (?,?,?,?,?,?)',
    [uuidv4(), data.name, data.desc, new Date(), new Date(), data.image],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateProductGategory = (data, callback) => {
  db.query(
    'UPDATE `productCategory` SET  `desc` = ? , `updateAt` = ?,`image` = ? where id = ? ',
    [data.desc, new Date(), data.image, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeProductGategory = (id, callback) => {
  db.query('DELETE FROM `productCategory` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readProductGategory,
  readProductGategoryById,
  createProductGategory,
  updateProductGategory,
  removeProductGategory,
};
