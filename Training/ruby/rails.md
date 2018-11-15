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

### File/Folders in application

- app/ : Contains the controllers, models, views, helpers, mailers and assets for your application.
- config/ : Configure your application's routes, database, and more.
- db/ : Contains your current database schema, as well as the database migrations.
- Gemfile : These files allow you to specify what gem dependencies are needed for your Rails application.

## Controller

- It coordinates the interaction between the user, the views, and the model.
- To create a controller use command

```
rails g controller controller_name actions
```
- The naming convention of controllers in Rails favors pluralization of the last word in the controller's name.
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
-  To rollback to last migration
```
rails db:rollback
```
- To run specific migration
```
rails db:migrate VERSION=20080906120000
```

## Validations

- Validations are used to ensure that only valid data is saved into your database. 
- Active Record offers many pre-defined validation helpers that you can use directly inside your class definitions.
- These helpers provide common validation rules.
	- **confirmation** : Use to confirm the changes
	- **numericality** : To check the numericality of the input
	- **length** : To check the length of the input
	- **presence** : Checks the presence
	- **absence**: Checks the absence
	-	**uniqueness** : Checks the uniqueness

## Callbacks

- Callbacks are methods that get called at certain moments of an object's life cycle. 
- With callbacks it is possible to write code that will run whenever an Active Record object is created, saved, updated, deleted, validated, or loaded from the database.

- Callbacks for creating an object
    - before_validation
    - after_validation
    - before_save
    - around_save
    - before_create
    - around_create
    - after_create
    - after_save
    - after_commit/after_rollback
- Callbacks for updating an object
    - before_validation
    - after_validation
    - before_save
    - around_save
    - before_update
    - around_update
    - after_update
    - after_save
    - after_commit/after_rollback
- Callbacks for destroying an object
    - before_destroy
    - around_destroy
    - after_destroy
    - after_commit/after_rollback

## Associations
-  An association is a connection between two Active Record models.
- Types of assoications availiable
	- belongs_to
	- has_one
	- has_many
	- has_many :through
	- has_one :through
	- has_and_belongs_to_many

