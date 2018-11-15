# RVM?
- RVM is a command-line tool which allows you to easily install, manage, and work with multiple ruby environments from interpreters to sets of gems.

**Install RVM**

```sudo apt-get install rvm```

**Change the terminal window**
- edit --> profile preferences --> commands --> run command as login shell.

**Install ruby**
	rvm install ruby

# Gemset?

- Gemset gives you the privilege of creating set of gems specific to your particular rails application.
- Gemset is basically set of gems collected together
- These set of gems collected together can be used for the development of your particular application
- When you install particular Ruby using RVM then it comes with 2 gemsets. viz. default and global.

**Creating gemset**

```rvm gemset create gemset_name```

**Use the gemset**

```rvm use gemset gemset_name```

**To list the gemset that are availiable for the current ruby version**

```rvm gemset list```

**To set gemset as default**

```rvm --default use ruby_version@gemset_name```

**To delete gemset**

```rvm gemset delete gemset_name```
