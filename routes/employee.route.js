const express = require('express');
const router = express.Router();

const employeeCtrl = require('../controllers/employee.controller');

router.get('/', employeeCtrl.getAllEmployee);
router.post('/', employeeCtrl.createEmployee);
router.get('/:id', employeeCtrl.getOneEmployee);
router.put('/:id', employeeCtrl.updateEmployee);
router.delete('/:id', employeeCtrl.deleteEmployee);
router.post('/filter', employeeCtrl.findEmployeesByDepartmentOrDate);

module.exports = router;