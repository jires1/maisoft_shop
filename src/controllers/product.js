const { readProduct, readProductById, createProduct, updateProduct, removeProduct } = require('../models/product');

const getAllProduct = (req, res) => {
  readProduct((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Products: result });
    }
  });
};

const getProductById = (req, res) => {
  const id = req.params.id;
  readProductById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Products: result });
    }
  });
};

const postProduct = (req, res) => {
  const data = req.body;
  console.log(data);

  createProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Products: result });
    }
  });
};

const patchProduct = (req, res) => {
  const data = req.body;
  console.log(data);

  updateProduct(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, Products: result });
    }
  });
};

const deleteProduct = (req, res) => {
  const id = req.params.id;
  removeProduct(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'Product deleted !' });
    }
  });
};

module.exports = {
  getAllProduct,
  getProductById,
  postProduct,
  patchProduct,
  deleteProduct,
};
