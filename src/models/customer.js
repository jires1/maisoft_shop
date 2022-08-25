const db = require('../config/db');
const { v4: uuidv4 } = require('uuid');

const readCustomer = (callback) => {
  db.query('SELECT * FROM customer', (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

const readCustomerById = (id, callback) => {
  db.query('SELECT * FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res[0]);
    }
  });
};

const createCustomer = (data, callback) => {
  db.query(
    `INSERT INTO customer (id, firstName, lastName, email, phone, image, status, createdAt, updateAt, hash) VALUES (?, ?,?, ?,?,?,?,?,?,?)`,
    [
      uuidv4(),
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.image,
      data.status || 'INACTIVE',
      new Date(),
      new Date(),
      data.hash,
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

const updateCustomer = (data, callback) => {
  db.query(
    'UPDATE customer SET firstName = ?, lastName= ?, hash= ?, image= ?, updateAt= ? where id = ? ',
    [data.firstName, data.lastName, data.hash, data.image, new Date(), data.id],
    (err, res) => {
      if (err) {
        callback(err, null);
      } else {
        callback(null, res);
      }
    }
  );
};

const removeCustomer = (id, callback) => {
  db.query('DELETE FROM customer WHERE id = ?', [id], (err, res) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, res);
    }
  });
};

module.exports = {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
};
