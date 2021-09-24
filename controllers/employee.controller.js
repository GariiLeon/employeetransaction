const Employee = require('../models/employee');

exports.createEmployee = (req, res, next) => {
  const employee = new Employee({
    id: req.body.id,
    name: req.body.name,
    firstName: req.body.firstName,
    dateCreated: req.body.dateCreated ? new Date(req.body.dateCreated) : new Date(),
    department: req.body.department
  });
  employee.save().then(
    () => {
      res.status(201).json({
        message: 'Employee saved successfully!'
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

exports.getOneEmployee = (req, res, next) => {
  Employee.findOne({
    _id: req.params.id
  }).then(
    (employee) => {
      res.status(200).json(employee);
    }
  ).catch(
    (error) => {
      res.status(404).json({
        error: error
      });
    }
  );
};

exports.findEmployeesByDepartmentOrDate = (req, res, next) => {
    let filter = {}
    if(req.body.department){
        filter = {
            department: req.body.department
        }
    }
    if(req.body.dateCreated){
        let date_debut = new Date(req.body.dateCreated);
        date_debut.setDate(date_debut.getUTCDate()); //Setting utc date, Only useful if the region is behind UTC
        let date_fin = new Date(date_debut).setHours(23,59,59,999)
        if(!filter){
            filter = {
                dateCreated : {
                    $gte : date_debut,
                    $lte : date_fin
                }
            }
        }else{
            filter.dateCreated = {
                $gte : date_debut,
                $lte : date_fin
            }
        }
        
    }
    Employee.find(filter).then(
      (employees) => {
        res.status(200).json(employees);
      }
    ).catch(
      (error) => {
        res.status(404).json({
          error: error
        });
      }
    );
};

exports.updateEmployee = (req, res, next) => {
  const employee = {
    id: req.body.id,
    name: req.body.name,
    firstName: req.body.firstName,
    department: req.body.department,
    lastUpdated : new Date()
  };
  Employee.updateOne({_id: req.params.id}, employee).then(
    () => {
      res.status(201).json({
        message: 'Employee updated successfully!'
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

exports.deleteEmployee = (req, res, next) => {
  Employee.deleteOne({_id: req.params.id}).then(
    () => {
      res.status(200).json({
        message: 'Deleted!'
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

exports.getAllEmployee = (req, res, next) => {
  Employee.find().then(
    (employees) => {
      res.status(200).json(employees);
    }
  ).catch(
    (error) => {
        res.status(400).json({
            error: error
        });
    }
  );
};