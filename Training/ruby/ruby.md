# Ruby


- Ruby is a dynamic, interpreted, reflective, object-oriented, general-purpose programming language.
- All ruby files will have extension .rb.
- To run a program
	``` ruby filename.rb```

# Classes and Objects

- A class is the blueprint from which individual objects are created. 
- Instance of class are called as objects.
- A class in ruby is defined as
``` class ClassName
end```

# Variables in class

	- **Local Variables** - They are the variables that are defined in a method and are not availiable outside that method.They always begins with small letter or '_'.
	- **Instance Variables** - They are available across methods for any particular instance or object.They are preceded by the at sign (@) followed by the variable name.
	- **Class Variables** - A class variable belongs to the class and is a characteristic of a class. They are preceded by the sign @@ and are followed by the variable name.
	- **Global Variables** - Global variables are availiable across the class.The global variables are always preceded by the dollar sign ($).

# Objects

- Objects are instances of the class.
- Ruby uses new method to create an object.

``` obj = ClassName.new ```

# Operators

**===** - Used to test equality within a when clause of a case statement.
**<=>** 
	- Combined comparison operator.
	- Returns 0 if first operand equals second.
	- 1 if first operand is greater than the second.
	- 1 if first operand is less than the second.
**.eql?** - True if the receiver and argument have both the same type and equal values.
**equal** - True if the receiver and argument have the same object id.
 
# Ruby if...else Statement

- if expressions are used for conditional execution. 
- The values false and nil are false, and everything else are true.
- Instead of else if it uses elsif.
- It executes code if condition is true or if false the else part is executed.

```
if condition 
   code...
[elsif condition
   code...]
[else
   code...]
end

```

# Ruby unless Statement

- Executes code if condition is false. If the condition is true, code in the else clause is executed.

```
unless condition
   code
else
   code 
end

```

# Ruby while Statement

- Executes code while condition is true.

```
while conditional [do]
   code
end
```

# Ruby While modifier

- Executes code while condition is true.

``` 
code while condition

```
OR
```
begin 
  code 
end while conditional
```
# Ruby until Statement

- Executes code while condition is false.

```
until conditional [do]
   code
end
```
# Ruby until modifier

- Executes code while condition is false.

```
code until conditional
```
OR
```
begin
   code
end until conditional

# Ruby For statement

- Executes code once for each element in expression.
```
for variable [, variable ...] in expression [do]
   code
end
```

# Ruby Next statement

- Jumps to the next iteration of the most internal loop.
- Terminates execution of a block if called within a block.

# Ruby methods

- Method names should begin with a lowercase letter.
- Method can accept parameters and also it is possible to set default values for the parameters.
- Every method in Ruby returns a value by default. This returned value will be the value of the last statement.
- The return statement in ruby is used to return one or more values from a Ruby Method.

```
def method_name (var1, var2)
   expr..
end
```
