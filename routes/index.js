const express = require('express');
const router = express.Router();

const PaymentController = require('../controllers/PaymentController');
const PaymentService = require('../services/Payments.Service');

const PaymentInstance = new PaymentController(new PaymentService());

router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});

router.get('/payment', (req, res, next) => {
  PaymentInstance.getPaymentLink(req, res);
});

router.get('/subscription', (req, res, next) => {
  PaymentInstance.getSubscriptionLink(req, res);
});

module.exports = router;
