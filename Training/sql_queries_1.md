

## SET 1

1. Employee_Name AND Manager_Name
```
SELECT b.name AS "Emp_Name",a.name AS "Mgr_Name" 
FROM employee a, employee b 
WHERE a.emp_id = b.mgr_id;
```
2. Employee name, emp doj, manager name, manger doj
```
SELECT a.name AS "Emp_Name",a.joining_date AS "DOJ",b.name AS "Mgr_Name",b.joining_date AS "DOJ" 
FROM employee a, employee b 
WHERE a.mgr_id = b.emp_id;
```
3. Employee name, Emp Dept, Mgr Dept
```
SELECT a.name Emp_Name,ad.name Employee_dept ,bd.name Manager_dept F
ROM employee a, employee b ,dept ad,dept bd 
WHERE b.emp_id = a.mgr_id 
AND a.dept_id=ad.dept_id 
AND b.dept_id=bd.dept_id;
```
4. List of employees without a manager
```
SELECT name 
FROM employee 
WHERE mgr_id IS NULL;
```
5. List of terminated manager names
```
SELECT DISTINCT b.name AS manager_names 
FROM employee a,employee b WHERE a.mgr_id=b.emp_id 
AND b.termination_date IS NOT NULL;

```
6. List of department names WHERE we have a terminated employee
```
SELECT DISTINCT d.name as dept_name 
FROM employee a,dept d 
WHERE a.termination_date is NOT NULL 
AND a.dept_id = d.dept_id;
```
7. List of department names WHERE we have a terminated Manager
```
SELECT DISTINCT bd.name Dept_name 
FROM employee a,employee b,dept ad,dept bd  
WHERE a.mgr_id=b.emp_id 
AND b.termination_date is NOT NULL 
AND ad.dept_id=a.dept_id 
AND bd.dept_id=b.dept_id;

```
8. List of employees whose manager's salary is less then employee salary
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND b.salary < a.salary;
```
9. List of employees whose doj is earlier than manager
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date < b.joining_date;

```
10. List of employees whose name has a vowel
```
SELECT name 
FROM employee 
WHERE name LIKE '%A%' 
OR name LIKE '%E%' 
OR name LIKE '%I%' 
OR name LIKE '%O%' 
OR name LIKE '%U%' 
OR name LIKE '%a%' 
OR name LIKE '%e%' 
OR name LIKE '%i%' 
OR name LIKE '%o%' 
OR name LIKE '%u%'
```
11. List of employees whose's manager name has a vowel AND employee salary is less than 20000
```
SELECT b.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE a.emp_id = b.mgr_id 
AND b.salary < 20000 
AND (a.name LIKE '%A%' 
     OR a.name LIKE '%E%' 
     OR a.name LIKE '%I%' 
     OR a.name LIKE '%O%' 
     OR a.name LIKE '%U%' 
     OR a.name LIKE '%a%' 
     OR a.name LIKE '%e%' 
     OR a.name LIKE '%i%' 
     OR a.name LIKE '%o%
     OR a.name LIKE '%u%');
```
12. List of employees who has joined in Jan/Feb AND Nov
```
SELECT name 
FROM employee 
WHERE to_char(joining_date, 'mm'. = '02'  OR to_char(joining_date, 'mm'. = '01'  OR to_char(joining_date, 'mm'. = '11';
```

