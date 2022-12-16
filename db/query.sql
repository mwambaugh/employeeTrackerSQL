SELECT employees.employee_name AS employee, reviews.review
FROM reviews
LEFT JOIN employees
ON reviews.employee_id = employees.id
ORDER BY employees.employee_name;