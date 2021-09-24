const mongoose = require('mongoose')
const Transaction = require('../models/transaction')

exports.createTransactionCheckIn = (req, res, next) => {
    let transaction_date = new Date().toISOString().split('T')[0]
    const transaction = new Transaction({
        employeeId: req.body.employeeId,
        transactionDate: transaction_date,
        checkInDateTime: new Date(),
        comment: req.body.comment,
    });
    transaction.save().then(
        () => {
            res.status(201).json({
                message: 'Check In saved successfully!'
            });
        }
    ).catch(
        (error) => {
          res.status(400).json({
            error: error
          });
        }
    );
};

exports.updateTansactionCheckOut = async (req, res, next) => {
    try{
        let transaction_date = new Date().toISOString().split('T')[0]
        /**
         * Get the last transaction of the same date and with no checkout date yet made by the employee
         * Check if that exists and update it with the checkout date and time
         */
        let lastTransaction =  await Transaction.findOne({
            employeeId: req.body.employeeId,
            transactionDate: transaction_date,
            checkOutDateTime: null
        });
        console.log(lastTransaction)
        
        if(lastTransaction){
            let check_in = new Date(lastTransaction.checkInDateTime);
            let check_out = new Date();
            if(check_in.getTime() < check_out.getTime()){
                let transaction_hourDiff = parseInt((check_out-check_in) / 1000 / 60 / 60);
                lastTransaction.timeDuration = transaction_hourDiff
                lastTransaction.comment = req.body.comment
                lastTransaction.checkOutDateTime = check_out
                await lastTransaction.save()
                res.status(201).json({
                    message: 'Check Out saved successfully!',
                    workedHours: transaction_hourDiff
                });
            }else{
                res.status(400).json({
                    error: 'An error occured. The Check Out Date have to be greater than the Check In Date'
                });
            }
            
        }
    }catch(error){
        res.status(400).json({
            error: error
        });
    }
};

exports.getAllTransactions = (req, res, next) => {
    Transaction.find().then(
      (transactions) => {
        res.status(200).json(transactions);
      }
    ).catch(
      (error) => {
        res.status(400).json({
          error: error
        });
      }
    );
  };