const { readOrder, readOrderById, createOrder, updateOrder, removeOrder } = require('../models/order');

const getAllOrder = (req, res) => {
  readOrder((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Orders: result });
    }
  });
};

const getOrderById = (req, res) => {
  const id = req.params.id;
  readOrderById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Orders: result });
    }
  });
};

const postOrder = (req, res) => {
  const data = req.body;
  console.log(data);

  createOrder(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Orders: result });
    }
  });
};

const patchOrder = (req, res) => {
  const data = req.body;
  console.log(data);

  updateOrder(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Orders: result });
    }
  });
};

const deleteOrder = (req, res) => {
  const id = req.params.id;
  removeOrder(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Order deleted !' });
    }
  });
};

module.exports = {
  getAllOrder,
  getOrderById,
  postOrder,
  patchOrder,
  deleteOrder,
};
