

## SET 1

**1. Employee_Name AND Manager_Name**
```
SELECT b.name AS "Emp_Name",a.name AS "Mgr_Name" 
FROM employee a, employee b 
WHERE a.emp_id = b.mgr_id;
```
**2. Employee name, emp doj, manager name, manger doj**
```
SELECT a.name AS "Emp_Name",a.joining_date AS "DOJ",b.name AS "Mgr_Name",b.joining_date AS "DOJ" 
FROM employee a, employee b 
WHERE a.mgr_id = b.emp_id;
```
**3. Employee name, Emp Dept, Mgr Dept**
```
SELECT a.name Emp_Name,ad.name Employee_dept ,bd.name Manager_dept F
ROM employee a, employee b ,dept ad,dept bd 
WHERE b.emp_id = a.mgr_id 
AND a.dept_id=ad.dept_id 
AND b.dept_id=bd.dept_id;
```
**4. List of employees without a manager**
```
SELECT name 
FROM employee 
WHERE mgr_id IS NULL;
```
**5. List of terminated manager names**
```
SELECT DISTINCT b.name AS manager_names 
FROM employee a,employee b WHERE a.mgr_id=b.emp_id 
AND b.termination_date IS NOT NULL;

```
**6. List of department names WHERE we have a terminated employee**
```
SELECT DISTINCT d.name as dept_name 
FROM employee a,dept d 
WHERE a.termination_date is NOT NULL 
AND a.dept_id = d.dept_id;
```
**7. List of department names WHERE we have a terminated Manager**
```
SELECT DISTINCT bd.name Dept_name 
FROM employee a,employee b,dept ad,dept bd  
WHERE a.mgr_id=b.emp_id 
AND b.termination_date is NOT NULL 
AND ad.dept_id=a.dept_id 
AND bd.dept_id=b.dept_id;

```
**8. List of employees whose manager's salary is less then employee salary**
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND b.salary < a.salary;
```
**9. List of employees whose doj is earlier than manager**
```
SELECT a.name AS "Emp_Name" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date < b.joining_date;

```
**10. List of employees whose name has a vowel**
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
**11. List of employees whose's manager name has a vowel AND employee salary is less than 20000**
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
**12. List of employees who has joined in Jan/Feb AND Nov**
```
SELECT name 
FROM employee 
WHERE to_char(joining_date, 'mm'. = '02'  OR to_char(joining_date, 'mm'. = '01'  OR to_char(joining_date, 'mm'. = '11';
```



## SET - 2 

**1. Manager Name, Count of Employees whose start date is after 2013** 

```
SELECT b.name AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
ORDER BY b.name;
```
``` 
SELECT b.name AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a inner join employee b ON b.emp_id = a.mgr_id 
WHERE a.joining_date>'01-01-2013' 
group by b.name 
order by b.name;
```
```
SELECT COALESCE(b.name,'CEO') AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a LEFT join employee b ON b.emp_id = a.mgr_id 
WHERE a.joining_date>'01-01-1900' 
GROUP BY b.name 
ORDER BY b.name;
```

**2) Manager Name, Min(emp salary) where manager start date is after 2013**

```
SELECT b.name AS "Mgr_Name",min(a.salary) AS "Emp_salary" 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND b.joining_date>'01-01-2013' 
GROUP BY b.name;
```

**3) Manager name who atleast has two employees started after 2013**

```
SELECT b.name AS  Mgr_Name,count(a.name) AS Emp_count 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
HAVING count(a.name) >=2;
```
```
SELECT b.name AS Mgr_Name 
FROM employee a, employee b 
WHERE b.emp_id = a.mgr_id 
AND a.joining_date>'01-01-2013' 
GROUP BY b.name 
HAVING count(a.name) >=2;
```

**4) Dept Name, Count of Employees whose start date is after 2013**

```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name;
```

**5) Dept Name, Min(emp salary) where manager start date is after 2013**

```
SELECT d.name,min(a.salary) 
FROM employee a,employee b,dept d  
WHERE d.dept_id=a.dept_id 
AND d.dept_id=b.dept_id 
AND b.emp_id=a.mgr_id 
AND  b.joining_date>'01-01-2013' 
GROUP BY d.name;
```

**6) Dept Name who atleast has two employees started after 2013**

```
SELECT d.name,count(e.name) 
FROM employee e,dept d  
WHERE d.dept_id=e.dept_id 
AND e.joining_date>'01-01-2013' 
GROUP BY d.name 
HAVING count(e.name)>=2;
```

**7. Number of employees per year**

```
SELECT COUNT(name) AS emp_count,EXTRACT(year FROM joining_date) 
FROM employee 
GROUP BY EXTRACT(year from joining_date);
```


**8. Number of employees per year, per department**

```
SELECT EXTRACT(year FROM e.joining_date) ,d.name,COUNT(e.emp_id) 
FROM employee e,dept d 
WHERE e.dept_id=d.dept_id 
GROUP BY EXTRACT(year FROM e.joining_date),d.name 
ORDER BY d.name;
```


**9.List of Months (Say, Jan-2018) where number of employees joined is more than 2**

```
SELECT EXTRACT(year FROM joining_date) AS YEAR,EXTRACT(month FROM joining_date) AS Month ,COUNT(emp_id) AS COUNT 
FROM employee GROUP BY EXTRACT(year FROM joining_date),
EXTRACT(month FROM joining_date) 
HAVING COUNT(emp_id)>2;
```


**10. List of Managers who has employees from more than one department**

```
SEELCT m.name 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id 
AND e.dept_id=d.dept_id 
GROUP BY m.name having COUNT(DISTINCT d.name)>1;
```


**11. List of Departments who has atleast two managers**

```
SELECT d.name,COUNT(distinct m.name) 
FROM employee e,employee m,dept d 
WHERE e.mgr_id=m.emp_id 
AND m.dept_id=d.dept_id 
GROUP BY d.name 
HAVING COUNT(DISTINCT m.name)>=2;
```


**12. Employee Names who joined after 2013 and his manager has more than two reportees**

```
SELECT a.name 
FROM employee a,employee b 
WHERE b.emp_id=a.mgr_id 
AND a.joining_date>'01-01-2013'
AND (select count(a.name) 
FROM employee a,employee b 
WHERE b.emp_id = a.mgr_id )>2;
```

## SET - 3

**1. SQL to find the missing ids from dept**

```
SELECT generate_series(
                  (SELECT MIN(dept_id) 
                   FROM dept),
                  (SELECT MAX(dept_id) 
                   FROM dept)) 
AS MissingID 
EXCEPT SELECT dept_id 
FROM dept ORDER BY MissingID ;
```

```
SELECT *
FROM generate_series (
		(SELECT MIN(dept_id) FROM dept),
		(SELECT MAX(dept_id) FROM dept)
	) 
AS sn
LEFT JOIN dept 
ON dept.dept_id = sn
WHERE dept_id IS NULL;

```


**2. Manager Name, Reportee who joined first (Reportee Name - doj), Reportee who draws less sal (Reportee Name - salary) - window function**

```
SELECT a.name,a.doj AS "Reportee Name - doj",b.sal AS "Reportee Name - salary"
FROM
    (SELECT b.name,CONCAT(a.name,'-',a.joining_date) AS doj 
     FROM employee a,employee b
     WHERE b.emp_id=a.mgr_id 
     AND EXISTS(
         SELECT 1
         FROM employee a_inr
         WHERE a_inr.mgr_id=b.emp_id
         HAVING min(a_inr.joining_date)=a.joining_date
         ) 
) a
INNER JOIN (
    SELECT b.name,CONCAT(a.name,'-',a.salary) AS sal	
    FROM employee a,employee b
    WHERE b.emp_id=a.mgr_id
    AND EXISTS(
             SELECT 1
             FROM employee a_inr
             WHERE a_inr.mgr_id=b.emp_id
             HAVING min(a_inr.salary)=a.salary     
             )
) b
ON a.name=b.name;
```

```
SELECT m1.Manager_name,m1.jd,m2.sd
FROM
    (SELECT DISTINCT m2.name AS Manager_name,
     FIRST_VALUE(CONCAT(m1.name,'-',m1.joining_date)) OVER(
     PARTITION BY m1.mgr_id
     ORDER BY m1.joining_date) AS jd
     FROM employee m1, employee m2
     WHERE m2.emp_id=m1.mgr_id
    )m1 
INNER JOIN
    (SELECT DISTINCT m2.name AS Manager_name,
     FIRST_VALUE(CONCAT(m1.name,'-',m1.salary)) OVER ( 
     PARTITION BY m1.mgr_id 
     ORDER BY m1.salary) AS sd 
     FROM employee m1, employee m2 
     WHERE m2.emp_id=m1.mgr_id
    )m2
ON m1.Manager_name=m2.Manager_name;
```

```
SELECT DISTINCT
	M . NAME AS mgr_name,
	FIRST_VALUE (e. NAME) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.joining_date
	) AS first_emp_name,
	FIRST_VALUE (e.joining_date) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.joining_date
	) AS first_doj,
	FIRST_VALUE (e. NAME) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.salary
	) AS least_sal_emp_name,
	FIRST_VALUE (e.salary) OVER (
		PARTITION BY M .emp_id
		ORDER BY
			e.salary
	) AS least_salary
FROM
	employee e
INNER JOIN employee M ON e.mgr_id = M .emp_id
```

**3. Find the list of employee records WHERE salary data is missing.With the above example, we don’t have salary information FROM 2012 to 2014.
Assume, if above data is as commented, then there is no missing as there is no gap** 

TABLE - salary_history

id,name,start_date,end_date,salary

1,Aneesh,2010,2011,1000

1,Aneesh,2011,2012,1100 -- 1,Aneesh,2011,2014,1100

1,Aneesh,2014,2015,1200

1,Aneesh,2015,null,1200

```
SELECT CONCAT(a.i,'-',b.i) AS Missing_Data
FROM
(
SELECT i 
FROM generate_series(
                   (SELECT MIN(start_date) 
                   FROM sh),
                   (SELECT MAX(start_date) 
                   FROM sh)) AS t(i)
WHERE NOT EXISTS(
                 SELECT 1 
                 FROM sh
                 WHERE sh.start_date=t.i)
) a

INNER JOIN (
SELECT i 
FROM generate_series(
                   (SELECT MIN(end_date) 
                   FROM sh),
                   (SELECT MAX(end_date) 
                   FROM sh)) AS t(i)
WHERE NOT EXISTS(
                 SELECT 1 
                 FROM sh
                 WHERE sh.end_date=t.i)
)b

ON  b.i-a.i>1;
```
```

SELECT * 
FROM (
     SELECT
     sh.start_date,
     sh.end_date,
     LEAD (start_date, 1) 
     OVER (ORDER BY start_date) 
     AS next_start_date
FROM sh
ORDER BY start_date)t 
WHERE next_start_date-end_date > 0

```

## SET - 4


**1. Load the csv to table using psql command**

```
psql -h 172.17.10.109 -U python_app -d training -c "\copy employee (emp_id,name,dept_id,mgr_id,salary,joining_date,termination_date) FROM 'Downloads/sql4.csv' with (format csv,header true, delimiter ',');"

```
**2. While loading the table, if the given mgr_id is not in emp table, insert/update should fail**

```
ALTER TABLE employee
ADD CONSTRAINT FK_employee_Code FOREIGN KEY (mgr_id)
REFERENCES employee (emp_id) ;
```
```
ALTER TABLE employee
ADD CONSTRAINT FK_dept_code FOREIGN KEY (dept_id)
REFERENCES dept (dept_id) ;
```

**3. create a new employee table (say employee1) with the same structure and constraints of employee table but not data**

``` 
CREATE TABLE employee1
AS
 SELECT * FROM employee
 WHERE 1=0;
```

**4. add a new column peer_emp_ids array**

```
ALTER TABLE employee1 ADD COLUMN peer_emp_ids int[];
```

**5. write an insert statement to populate this table from employee table where peer_emp_ids is the employee ids of its manager excluding the given employee**

```
INSERT into employee1
SELECT*,(
	SELECT ARRAY_AGG (emp_id)
	FROM employee e_inr
	WHERE e_inr.mgr_id = e.mgr_id
	) - ARRAY [ e.emp_id ]
FROM employee e

```
**6. Write a SQL to find all the employees for the given employee id where the given employee is part of using peer_emp_ids**
```
SELECT *
FROM employee e
INNER JOIN employee1 e1 
ON e.emp_id = ANY (e1.peer_emp_ids)
WHERE e1.emp_id = 3
``` 


