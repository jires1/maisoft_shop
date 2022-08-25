const { readCoupon, readCouponById, createCoupon, updateCoupon, removeCoupon } = require('../models/coupon');

const getAllCoupon = (req, res) => {
  readCoupon((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Coupons: result });
    }
  });
};

const getCouponById = (req, res) => {
  const id = req.params.id;
  readCouponById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Coupons: result });
    }
  });
};

const postCoupon = (req, res) => {
  const data = req.body;
  console.log(data);

  createCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon created !' });
    }
  });
};

const patchCoupon = (req, res) => {
  const data = req.body;
  console.log(data);

  updateCoupon(data, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon updated !' });
    }
  });
};

const deleteCoupon = (req, res) => {
  const id = req.params.id;
  console.log(id);
  removeCoupon(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Coupon deleted !' });
    }
  });
};

module.exports = {
  getAllCoupon,
  getCouponById,
  postCoupon,
  patchCoupon,
  deleteCoupon,
};
