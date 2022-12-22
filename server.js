const express = require('express');
// Import and require mysql2
const mysql = require('mysql2');

const inquirer = require('inquirer');
const fs = require('fs');

const departmentHandle = require("./handlers/department");
const roleHandle = require("./handlers/roles");
const employeeHandle = require("./handlers/employee");
const allHandle = require("./handlers/all";)



const PORT = process.env.PORT || 3001;
const app = express();

//will need a way to handle choices 

startArray = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'Add Role', 'View All Departments', 'Add Departments', 'Quit'];

inquirer
  .prompt([
    { 
    type: 'checkbox',
    name: 'start',
    message: 'What would you like to do?',
    choices: startArray},

     {/* Pass your questions in here */},

      {/* Pass your questions in here */},

       {/* Pass your questions in here */},

        {/* Pass your questions in here */},
  ])
  .then((answers) => {
    // Use user feedback
  })
  .catch((error) => {
    if (error.isTtyError) {
      // Prompt couldn't be rendered in the current environment
    } else {
      // Something else went wrong
    }
  });


// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: '',
    database: 'employee_db'
  },
  console.log(`Connected to the employee_db database.`)
);

// Create a employee

app.post('/api/new-employee', ({ body }, res) => {
  const sql = `INSERT INTO employee (employee_name)
    VALUES (?)`;
  const params = [body.employee_name];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: body
    });
  });
});

// Read all employees
app.get('/api/employee', (req, res) => {
  const sql = `SELECT id, employee_name AS title FROM employee`;
  
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
       return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// Delete a employee
app.delete('/api/employee/:id', (req, res) => {
  const sql = `DELETE FROM employee WHERE id = ?`;
  const params = [req.params.id];
  
  db.query(sql, params, (err, result) => {
    if (err) {
      res.statusMessage(400).json({ error: res.message });
    } else if (!result.affectedRows) {
      res.json({
      message: 'Employee not found'
      });
    } else {
      res.json({
        message: 'deleted',
        changes: result.affectedRows,
        id: req.params.id
      });
    }
  });
});

// Read list of all reviews and associated employee name using LEFT JOIN
app.get('/api/employee-reviews', (req, res) => {
  const sql = `SELECT employee.employee_name AS employee reviews.review FROM reviews LEFT JOIN employees ON reviews.employee_id = employees.id ORDER BY employees.employee_name;`;
  db.query(sql, (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json({
      message: 'success',
      data: rows
    });
  });
});

// BONUS: Update review name
app.put('/api/review/:id', (req, res) => {
  const sql = `UPDATE reviews SET review = ? WHERE id = ?`;
  const params = [req.body.review, req.params.id];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else if (!result.affectedRows) {
      res.json({
        message: 'employee not found'
      });
    } else {
      res.json({
        message: 'success',
        data: req.body,
        changes: result.affectedRows
      });
    }
  });
});

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
