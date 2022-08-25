const express = require('express');
const app = express();
const db = require('./src/config/db');
const customerRoutes = require('./src/routers/customer');
const discountRoutes = require('./src/routers/discount');
const couponRoutes = require('./src/routers/coupon');
const orderRoutes = require('./src/routers/order');
const orderDetailRoutes = require('./src/routers/orderDetail');
const productGategoryRoutes = require('./src/routers/productGategory');
const productRoutes = require('./src/routers/product');
const productImageRoutes = require('./src/routers/productImage');
const productDetailRoutes = require('./src/routers/productDetail');
const wishlistRoutes = require('./src/routers/wishlist');
const env = require('./src/config/env');
// console.log(env);

db.connect((err) => {
  if (err) {
    console.log('Db connect error' + err);
    return;
  }
  console.log('db connected');
});

app.use(express.json());

app.use('/api/customer', customerRoutes);

app.use('/api/discount', discountRoutes);

app.use('/api/coupon', couponRoutes);

app.use('/api/order', orderRoutes);

app.use('/api/orderDetail', orderDetailRoutes);

app.use('/api/productGategory', productGategoryRoutes);

app.use('/api/product', productRoutes);

app.use('/api/productImage', productImageRoutes);

app.use('/api/productDetail', productDetailRoutes);

app.use('/api/wishlist', wishlistRoutes);

app.listen(env.port, () => {
  console.log(`I listen in port ${env.port}`);
});
