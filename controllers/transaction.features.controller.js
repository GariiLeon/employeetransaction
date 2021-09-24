const mongoose = require('mongoose')
const Transaction = require('../models/transaction.features')

exports.createTransactionCheckIn = (req, res, next) => {
    const transaction = new Transaction({
        employeeId: new mongoose.Types.ObjectId(req.body.employeeId),
        time: new Date(),
        comment: req.body.comment,
        state: 10,
        state_name: 'check_in',
    });
    transaction.save().then(
        () => {
            transactionTrack(req.body.employeeId, new Date(), 10)
            res.status(201).json({
                message: 'Transaction saved successfully!'
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


exports.createTransactionCheckOut = (req, res, next) => {
    const transaction = new Transaction({
        employeeId: new mongoose.Types.ObjectId(req.body.employeeId),
        time: new Date(),
        comment: req.body.comment,
        state: 11,
        state_name: 'check_in',
    });
    transaction.save().then(
        async() => {
            await transactionTrack(req.body.employeeId, new Date(), 11)
            res.status(201).json({
                message: 'Transaction saved successfully!'
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


function transactionTrack(employeeId, date, state){
    /**
     * Create a collection to store employee id, a date, and a column check_in(Array) to store all check_in in that date
     * and a check_out column that do the same
     */
}