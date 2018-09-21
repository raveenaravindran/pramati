## POSTGRESQL

### COMMANDS

- Default Admin Login:
  - sudo -u postgres psql -U postgres
  - sudo -u postgres psql
  
- Describe a table - \d tablename

- Create new user:
  CREATE USER username WITH PASSWORD 'myPassword';
  
 - Create a superuser user:
   CREATE USER username SUPERUSER WITH PASSWORD 'myPassword' ;
   
 - Describe a table - \d table_name
 
 - Grant privilages to user
   GRANT ALL PRIVILAGES ON DATABASE database_name TO user_name;

