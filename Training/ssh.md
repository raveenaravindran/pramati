# SSH

- Using SSH we can connect and authenticate to remote servers and services.
- With SSH keys, you can connect to GitHub without supplying your username or password at each visit.

**If we have ssh key already existing**

- Start the ssh-agent in the background.
	```
	eval "$(ssh-agent -s)"
	output : Agent pid 17448
 	 ```
- To add private key to the agent
	```
	ssh-add ~/.ssh/id_rsa

	```

**Generate new SSH key**

- In terminal run the command
	```
	ssh-keygen -t rsa -b 4096 -C "your_email@example.com"
	```
- It creates a new ssh key, using the provided email as a label.
- When you're prompted to "Enter a file in which to save the key," press Enter. This accepts the default file location.
- At the prompt, type a secure passphrase.


**Adding to github account**

- Copy the ssh key to clipboard
	- Can do using command after installing the xclip
		- ```sudo apt-get install xclip```
		- ``` xclip -sel clip < ~/.ssh/id_rsa.pub```
- Login to your github account
	- Go to settings
	- Select SSH and GPG keys. 
	- Click New SSH key or Add SSH key.
	- Add title
	- Paste the key
	- Click on Add key button

