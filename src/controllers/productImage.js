const {
  readProductImage,
  readProductImageById,
  createProductImage,
  updateProductImage,
  removeProductImage,
} = require('../models/productImage');

const getAllProductImage = (req, res) => {
  readProductImage((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductImages: result });
    }
  });
};

const getProductImageById = (req, res) => {
  const id = req.params.id;
  readProductImageById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductImages: result });
    }
  });
};

const postProductImage = (req, res) => {
  const data = req.body;
  console.log(data);

  createProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductImages: result });
    }
  });
};

const patchProductImage = (req, res) => {
  const data = req.body;
  console.log(data);

  updateProductImage(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductImages: result });
    }
  });
};

const deleteProductImage = (req, res) => {
  const id = req.params.id;
  removeProductImage(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductImage deleted !' });
    }
  });
};

module.exports = {
  getAllProductImage,
  getProductImageById,
  postProductImage,
  patchProductImage,
  deleteProductImage,
};
