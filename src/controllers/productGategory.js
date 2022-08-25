const {
  readProductGategory,
  readProductGategoryById,
  createProductGategory,
  updateProductGategory,
  removeProductGategory,
} = require('../models/productGategory');

const getAllProductGategory = (req, res) => {
  readProductGategory((err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductGategorys: result });
    }
  });
};

const getProductGategoryById = (req, res) => {
  const id = req.params.id;
  readProductGategoryById(id, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductGategorys: result });
    }
  });
};

const postProductGategory = (req, res) => {
  const data = req.body;
  console.log(data);

  createProductGategory(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductGategorys: result });
    }
  });
};

const patchProductGategory = (req, res) => {
  const data = req.body;
  console.log(data);

  updateProductGategory(data, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json({ success: 1, ProductGategorys: result });
    }
  });
};

const deleteProductGategory = (req, res) => {
  const id = req.params.id;
  removeProductGategory(id, (err, result) => {
    if (err) {
      console.log(err);
    }
    if (result.affectedRows) {
      res.json({ success: 1, message: 'ProductGategory deleted !' });
    }
  });
};

module.exports = {
  getAllProductGategory,
  getProductGategoryById,
  postProductGategory,
  patchProductGategory,
  deleteProductGategory,
};
