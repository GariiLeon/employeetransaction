HOST: https://transac-emp.herokuapp.com/

# celaneotest

This is a simple API allowing consumers to view polls and vote in them.
Celaneotest is a simple public API allowing consumers to manage employees and manage their presence


## Employees Collection [/api/employee]

### List All Employees [GET]

+ Response 200 (application/json)

    ```json
        [
            {
                "_id": "614d9c8dc1d236d73a4902ba",
                "id": "1522",
                "name": "RAKOTO",
                "firstName": "Vao",
                "dateCreated": "2020-09-22T00:00:00.000Z",
                "department": "RH",
                "lastUpdated": "Fri Sep 24 2021 12:17:59 GMT+0200 (GMT+02:00)",
                "__v": 0
            },
        ]
    ```

### Create a new employee [POST]

You may create your an employee using this action. It takes a JSON
object containing informations about an employee

+ Request (application/json)

    ```json
        {
            "id" : 456,
            "name" : "RANAIVOSON" ,
            "firstName" : "Momo",
            "dateCreated" : "2020-09-22",
            "department" : "RH"
        }
    ```

+ Response 201 (application/json)

    + Body

    ```json
        {
            "message": "Employee saved successfully!"
        }
    ```

### Get an Employee [GET]
+ Location

    /api/employee/614d9c8dc1d236d73a4902ba

+ Response 200 (application/json)

    ```json
        [
            {
                "_id": "614d9c8dc1d236d73a4902ba",
                "id": "1522",
                "name": "RAKOTO",
                "firstName": "Vao",
                "dateCreated": "2020-09-22T00:00:00.000Z",
                "department": "RH",
                "lastUpdated": "Fri Sep 24 2021 12:17:59 GMT+0200 (GMT+02:00)",
                "__v": 0
            },
        ]
    ```

### Update an employee [PUT]

You may update an employee using this action. It takes a JSON
object containing updates about an employee's informations.

+ Request (application/json)
    + Location
    
        /api/employee/614d9c8dc1d236d73a4902ba
        
    + Body

    ```json
        {
            "id" : 456,
            "name" : "RANAIVOSON" ,
            "firstName" : "Momo",
            "dateCreated" : "2020-09-22",
            "department" : "IT"
        }
    ```

+ Response 201 (application/json)

    + Body

    ```json
        {
            "message": "Employee updated successfully!"
        }
    ```

### Delete an Employee [DELETE]
+ Location

    /api/employee/614d9c8dc1d236d73a4902ba

+ Response 200 (application/json)

    ```json
        {
            "message" : "Deleted !"
        }
    ```

### Get a list of employees filtered by creation date or department [POST]

It takes a JSON object containing the date or/and the department to look for.

+ Request (application/json)
    + Location 
    
        /api/employee/filter
    
    + Body
    
    ```json
        {
            "department" : "RH",
            "date" : "2020-09-22"
        }
    ```

+ Response 200 (application/json)

    + Body

    ```json
        [
            {
                "_id": "614d9c8dc1d236d73a4902ba",
                "id": "1522",
                "name": "RAKOTO",
                "firstName": "Vao",
                "dateCreated": "2020-09-22T00:00:00.000Z",
                "department": "RH",
                "lastUpdated": "Fri Sep 24 2021 12:17:59 GMT+0200 (GMT+02:00)",
                "__v": 0
            },
        ]
    ```



## Transactions Collection [/api/transaction]

### List All Transactions [GET]

+ Response 200 (application/json)

    ```json
        [
            {
                "_id": "614dab64d719d564fdd9363a",
                "employeeId": 1522,
                "transactionDate": "2021-09-24",
                "checkInDateTime": "2021-09-24T10:41:40.459Z",
                "comment": "Absent de 12 à 14h",
                "__v": 0,
                "checkOutDateTime": "2021-09-24T10:45:06.914Z",
                "timeDuration": 0
            },
            {
                "_id": "614dac2a6a03f18e2c83c085",
                "employeeId": 456,
                "transactionDate": "2021-09-24",
                "checkInDateTime": "2021-09-24T10:44:58.666Z",
                "comment": "blablalala",
                "__v": 0,
                "checkOutDateTime": "2021-09-24T10:48:36.730Z",
                "timeDuration": 0
            }
        ]
    ```

### Check-in of an employee [POST]

It takes a JSON object containing en employee id and a comment.

+ Request (application/json)
    + Location 
    
        /api/transaction/check-in
    
    + Body
    
    ```json
        {
            "employeeId" : 456,
            "comment" : "blablalala"
        }
    ```
+ Response 200 (application/json)

    ```json
        {
            "message": "Check In saved successfully!"
        }
    ```

### Check-out of an employee [POST]

It takes a JSON object containing en employee id and a comment.

+ Request (application/json)
    + Location 
    
        /api/transaction/check-out
    
    + Body
    
    ```json
        {
            "employeeId" : 456,
            "comment" : "blablalala"
        }
    ```
+ Response 200 (application/json)

    ```json
        {
            "message": "Check Out saved successfully!",
            "workedHours": 0
        }
    ```
