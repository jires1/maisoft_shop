const {
  readOrderDetail,
  readOrderDetailById,
  createOrderDetail,
  updateOrderDetail,
  removeOrderDetail,
} = require('../models/orderDetail');

const getAllOrderDetail = (req, res) => {
  readOrderDetail((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, OrderDetails: result });
    }
  });
};

const getOrderDetailById = (req, res) => {
  const id = req.params.id;
  readOrderDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, OrderDetails: result });
    }
  });
};

const postOrderDetail = (req, res) => {
  const data = req.body;
  console.log(data);

  createOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, OrderDetails: result });
    }
  });
};

const patchOrderDetail = (req, res) => {
  const data = req.body;
  console.log(data);

  updateOrderDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, OrderDetails: result });
    }
  });
};

const deleteOrderDetail = (req, res) => {
  const id = req.params.id;
  removeOrderDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'OrderDetail deleted !' });
    }
  });
};

module.exports = {
  getAllOrderDetail,
  getOrderDetailById,
  postOrderDetail,
  patchOrderDetail,
  deleteOrderDetail,
};
