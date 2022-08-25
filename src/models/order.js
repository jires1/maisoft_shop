const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readOrder = (callback) => {
  db.query('SELECT * FROM `order`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readOrderById = (id, callback) => {
  db.query('SELECT * FROM `order` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createOrder = (data, callback) => {
  db.query(
    'INSERT INTO `order` (`id`, `amount`, `tax`, `email` ,`status`, `adress`, `customerId`, `createdAt`, `updateAt`) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.amount,
      data.tax,
      data.email,
      data.status || 'INTRANSIT',
      data.adress,
      data.customerId,
      new Date(),
      new Date(),
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

const updateOrder = (data, callback) => {
  db.query(
    'UPDATE `order` SET  `amount` = ?,`tax` = ?, `email` = ?, `adress` = ?, `updateAt` = ? where id = ? ',
    [data.amount, data.tax, data.email, data.adress, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeOrder = (id, callback) => {
  db.query('DELETE FROM `order` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readOrder,
  readOrderById,
  createOrder,
  updateOrder,
  removeOrder,
};
