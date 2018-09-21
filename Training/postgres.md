## POSTGRESQL
```
PostgreSQL is a powerful, open source object-relational database system that uses and extends the SQL language combined with many features that safely store and scale the most complicated data workloads. 
```

### COMMANDS

- Default Admin Login:
 ```
   sudo -u postgres psql -U postgres
 ```
 ```
  sudo -u postgres psql
 ``` 
- Describe a table - \d tablename

- Create new user:
```
  CREATE USER username WITH PASSWORD 'myPassword';
```  
 - Create a superuser user:
 ```
   CREATE USER username SUPERUSER WITH PASSWORD 'myPassword' ;
 ```  
 - Describe a table
 ```
   \d table_name
 ```
 - Grant privilages to user
 ```
   GRANT ALL PRIVILAGES ON DATABASE database_name TO user_name;
 ```  
 - Create table
   ```
   CREATE TABLE table_name (
   column_name TYPE column_constraint,
   table_constraint table_constraint
   );
   ```
   List the column name, its data type, and column constraint. 

