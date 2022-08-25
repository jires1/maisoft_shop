const {
  readProductDetail,
  readProductDetailById,
  createProductDetail,
  updateProductDetail,
  removeProductDetail,
} = require('../models/productDetail');

const getAllProductDetail = (req, res) => {
  readProductDetail((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductDetails: result });
    }
  });
};

const getProductDetailById = (req, res) => {
  const id = req.params.id;
  readProductDetailById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductDetails: result });
    }
  });
};

const postProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);

  createProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductDetails: result });
    }
  });
};

const patchProductDetail = (req, res) => {
  const data = req.body;
  console.log(data);

  updateProductDetail(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductDetails: result });
    }
  });
};

const deleteProductDetail = (req, res) => {
  const id = req.params.id;
  removeProductDetail(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductDetail deleted !' });
    }
  });
};

module.exports = {
  getAllProductDetail,
  getProductDetailById,
  postProductDetail,
  patchProductDetail,
  deleteProductDetail,
};
