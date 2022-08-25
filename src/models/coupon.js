const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCoupon = (callback) => {
  db.query('SELECT * FROM `coupon`', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCouponById = (id, callback) => {
  db.query('SELECT * FROM `coupon` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createCoupon = (data, callback) => {
  db.query(
    'INSERT INTO `coupon` (`id`, `status`, `count`, `amount`, `createdAt`, `updateAt`, `code`, `expireAt`, `customerId`) VALUES (?,?,?,?,?,?,?,?,?)',
    [
      uuidv4(),
      data.status || 'INACTIVE',
      data.count,
      data.amount,
      new Date(),
      new Date(),
      data.code,
      new Date(),
      data.customerId,
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

const updateCoupon = (data, callback) => {
  db.query(
    'UPDATE `coupon` SET `status` = ?, `count` = ?, `amount` = ?, `updateAt` = ? ,`expireAt` = ? where id = ? ',
    [data.status, data.count, data.amount, new Date(), data.expireAt, data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCoupon = (id, callback) => {
  db.query('DELETE FROM `coupon` WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCoupon,
  readCouponById,
  createCoupon,
  updateCoupon,
  removeCoupon,
};
