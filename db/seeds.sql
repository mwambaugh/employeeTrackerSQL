use employees_db;

INSERT INTO
    department (name)
VALUES ("Engineering"), ("Finance"), ("Legal"), ("Sales");

INSERT INTO
    role (department_id, title, salary)
VALUES (4, "Sales Lead", 100000),
 (4, "Salseperson", 80000), 
 (1, "Lead Engineer", 150000), 
 (1, "Software Engineer", 120000), 
 (2, "Account Manager", 160000), 
 (3, "Legal Team Lead", 250000), 
 (3, "Lawyer", 190000);
 
INSERT INTO
    employee (first_name,last_name, role_id, manager_id)
 VALUES ("Mija", "D", 1, null);