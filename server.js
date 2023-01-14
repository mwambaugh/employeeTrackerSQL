const mysql = require('mysql2');
const inquirer = require('inquirer');

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    // MySQL username,
    user: 'root',
    // TODO: Add MySQL password here
    password: 'root',
    database: 'employees_db'
  },
  console.log(`Connected to the employee_db database.`)
);

function mainMenu() {
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
}

mainMenu();

const viewDepartments = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

const addEmployee = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

inquirer.prompt([
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the employee\'s first name?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the employee\'s last name?'

  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the employee\'s role id?'

  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is the employee\'s manager id?'

  }
])
  .then((answers) => {
    const sqlQuery =
      "INSERT INTO employee SET ?";
    db.query(sqlQuery, answers, (err, results) => {
      if (err) throw err;
      console.table(results);
      mainMenu();
    });
  });






  const viewEmployee = () => {
    const sqlQuery = 'SELECT name AS department FROM department';
    db.query(sqlQuery
      ,(err, results) => {
      if (err) throw err
      console.table(results)
  mainMenu();
    });
  };


const updateEmployeeRole = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

const viewRoles = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

const addRole = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

const addDepartments = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

const removeDepartment = () => {
  const sqlQuery = 'SELECT name AS department FROM department';
  db.query(sqlQuery
    ,(err, results) => {
    if (err) throw err
    console.table(results)
mainMenu();
  });
};

inquirer.prompt([
  {
    type: 'input',
    name: 'first_name',
    message: 'What is the employee\'s first name?'
  },
  {
    type: 'input',
    name: 'last_name',
    message: 'What is the employee\'s last name?'

  },
  {
    type: 'input',
    name: 'role_id',
    message: 'What is the employee\'s role id?'

  },
  {
    type: 'input',
    name: 'manager_id',
    message: 'What is the employee\'s manager id?'

  }
])
  .then((answers) => {
    const sqlQuery =
      "INSERT INTO employee SET ?";
    db.query(sqlQuery, answers, (err, results) => {
      if (err) throw err;
      console.table(results);
      mainMenu();
    });
  });

