const mysql = require('mysql2');
const inquirer = require('inquirer');

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

startArray = ['View All Employees', 'Add Employee', 'Update Employee Role', 'View All Roles', 'Add Role', 'Add Role', 'View All Department', 'Add Department', 'Remove Department', 'Quit'];

inquirer
  .prompt([
    { 
    type: 'list',
    name: 'start',
    message: 'What would you like to do?',
    choices: startArray},
  ])
  .then((answers) => {
    switch (answers.start) {
      case 'View All Employees': 
        return viewEmployee ();

      case 'Add Employee': 
        return addEmployee ();

      case 'Update Employee Role': 
        return updateEmployeeRole ();

      case 'View All Roles': 
        return viewRoles ();

      case 'Add Role':
        return addRole (); 
        
      case 'View All Department':
        return viewDepartments (); 
        
      case 'Add Department':
        return addDepartments ();

      case 'Remove Department':
        return removeDepartment ();

      default:
        return process.exit();
    }
  });

const viewDepartments = () => {
  const sqlQuery = 'SELECT dpt_name AS department FROM department';
  db.query(sqlQuery,(err, results) => {
    if (err) throw err
    console.table(results,['department'])
    db.end();
   }
  )
}


const addEmployee = () => {
  const sqlQuery = 'INSERT INTO employee';
  db.query(sqlQuery,(err, results) => {
    if (err) throw err
    console.table(results,['employee'])
    db.end();
   }
  )
}
