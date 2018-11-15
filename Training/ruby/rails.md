# Ruby on Rails 

- Rails is a web application development framework written in the Ruby language.
- The framework includes everything needed to create database-backed web applications according to the Model-View-Control pattern. 

## Create new application in rails

```
rails new application_name
```

### To run application use command
```
rails server or rails s
```

### File/Folders in new created application

- app/ : Contains the controllers, models, views, helpers, mailers and assets for your application.
- config/ : Configure your application's routes, database, and more.
- db/ : Contains your current database schema, as well as the database migrations.
- Gemfile : These files allow you to specify what gem dependencies are needed for your Rails application.

## Controller

- It coordinates the interaction between the user, the views, and the model.
- To create a controller use command
- The naming convention of controllers in Rails favors pluralization of the last word in the controller's name.
```
rails g controller controller_name actions
```
- Various methods used
	- **new** : It is used to create a new object.This method is called when you will display a page which takes an user input.
	- **create** : It is used to create record in the database.
	- **show** : It is used to display the details.
	- **edit** : This method will be called to display data on the screen to be modified by the user.
	- **update** : This method will be called after the edit method, when the user modifies a data and wants to update the changes into the database.
	- **delete** : It is used to delete a record from the database.

## Routes

- It is used to display the incoming request to controller and actions.
- The routes.rb file defines the actions available in the applications and the type of action such as get, post, and patch.
- To list all the routes availiable in an application use command
```
rails routes
```

## Views

-  Each method you define in the controller needs to have a corresponding erb file, with the same name as the method, to display the data that the method is collecting.
- **form_for** : It is used when we have to create a form for a model object.
- **form_tag** : It is used when we have to create a form without any model object providing URL endpoint to submit the form.
- **form_with** : It provides an option to pass a URL to be used for the submit action.

## Models

- A Rails Model is a Ruby class that can add database records, find particular data, update that data, or remove data. 
- These common operations are referred to by the acronym CRUD--Create, Remove, Update, Destroy.
- Models are created using the command
```
    rails g model ModelName ColumnOneName:ColumnOneType ColumnTwoName:ColumnTwoType
```
- To create the table and update the schema use command
```
rails db:migrate
```
- Migrations are a convenient way to alter your database schema over time in a consistent and easy way.
- Migration to add new column to the table
```
rails g migration AddColumnNameToTableName ColumnName:Type
```
This will create a migration file and after doing the db migration it will add the changes to the table.
- The change method is the primary way of writing migrations. 
- Change methods availiable are
	- add_column
	- add_foreign_key
	- add_reference
	- create_table
	- drop_table (must supply a block)
	- remove_column (must supply a type)
	- remove_foreign_key (must supply a second table)
	- remove_reference
	- rename_column
	- rename_index
	- rename_table

