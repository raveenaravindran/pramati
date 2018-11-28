

**SPEC**

- rspec-rails is a testing framework.
- RSpec is a 'Domain Specific Language' (DSL) testing tool written in Ruby to test Ruby code.

**Installation**

- Add 'rspec-rails' in both test and development group in gemfile.
- Do ```bundle install```.
- Create a directory  ```mkdir spec```
- Initialize it by ```cd spec```
- Do```rails generate rspec:install```
- These much files will be generated
	- .rspec
  - spec/spec_helper.rb
  - spec/rails_helper.rb
- To run rspec,use command ```bundle exec rspec``` or ```rspec```.By default it will run all _spec.rb files in the spec directory. 
- To run only the specified spec file, mention its path alone eg:``` rspec spec/models/user_spec.rb```

**Model Specs**

- To generate rspec file use command
	- ```rails generate rspec:model user``` this will create a file inside spec/models/user_spec.rb
- Model specs can also be marked by :type => :model 

- For validations,
	- validate_presence_of - For checking the presence
	- validate_length_of - For checking the length
	- validate_numericality_of - For checking the numericality
	- validate_uniqueness_of - For checking uniqueness

- For describing methods, 
	- Use . (or ::) for referring to a class method's name 
	- Use # when referring to an instance method's name. 

