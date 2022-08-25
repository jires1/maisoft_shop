const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrderDetail = (callback) => {
  db.query('SELECT * FROM `orderDetail`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderDetailById = (id, callback) => {
  db.query('SELECT * FROM `orderDetail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createOrderDetail = (data, callback) => {
  db.query(
    'INSERT INTO `orderDetail` (`id`, `name`, `quantity`, `price` , `orderId`) VALUES (?,?,?,?,?)',
    [uuidv4(), data.name, data.quantity, data.price, data.orderId],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const updateOrderDetail = (data, callback) => {
  db.query(
    'UPDATE `orderDetail` SET  `name` = ?,`quantity` = ?, `price` = ? where id = ? ',
    [data.name, data.quantity, data.price, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrderDetail = (id, callback) => {
  db.query('DELETE FROM `orderDetail` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
};
