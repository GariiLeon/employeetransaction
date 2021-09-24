const express = require('express');
const router = express.Router();

const transactionCtrl = require('../controllers/transaction.controller');

router.get('/', transactionCtrl.getAllTransactions);
router.post('/check-in', transactionCtrl.createTransactionCheckIn);
router.post('/check-out', transactionCtrl.updateTansactionCheckOut);

module.exports = router;