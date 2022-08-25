const {
  readCustomer,
  readCustomerById,
  createCustomer,
  updateCustomer,
  removeCustomer,
} = require('../models/customer');

const getAllCustomer = (req, res) => {
  readCustomer((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, customers: result });
    }
  });
};

const getCustomerById = (req, res) => {
  const id = req.params.id;
  readCustomerById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, customers: result });
    }
  });
};

const postCustomer = (req, res) => {
  const data = req.body;
  console.log(data);

  createCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, customers: result });
    }
  });
};

const patchCustomer = (req, res) => {
  const data = req.body;
  console.log(data);

  updateCustomer(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, customers: result });
    }
  });
};

const deleteCustomer = (req, res) => {
  const id = req.params.id;
  removeCustomer(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'customer deleted !' });
    }
  });
};

module.exports = {
  getAllCustomer,
  getCustomerById,
  postCustomer,
  patchCustomer,
  deleteCustomer,
};
