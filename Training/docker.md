Learning DOCKER !!

- Docker is a tool designed to make it easier to create, deploy, and run applications by using containers. 
- Containers allow a developer to package up an application with all of the parts it needs, such as libraries and other dependencies, and ship it all out as one package. By doing this, the developer can rest assured that the application will run on any other Linux machine regardless of any customized settings that machine might have that could differ from the machine used for writing and testing the code.
- Docker is a bit like a virtual machine. But unlike a virtual machine, rather than creating a whole virtual operating system, Docker allows applications to use the same Linux kernel as the system that they're running on and only requires applications be shipped with things not already running on the host computer. 
- This gives a significant performance boost and reduces the size of the application.
- Docker is open source(means that anyone can contribute to Docker and extend it to meet their own needs if they need additional features that aren't available out of the box).

COMMANDS TO INSTALL DOCKER

1. sudo apt-get update 
2. sudo apt-get -y install docker-ce

Run sample

3. sudo docker run hello-world
4. sudo docker images 
5. sudo docker run --name some-postgres -e POSTGRES_PASSWORD=mysecretpassword -d postgres
6. sudo dockerexec -it some-postgres bash
