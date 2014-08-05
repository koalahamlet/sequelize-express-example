An example todo app that shows a the usage of Sequelize within an Express.JS application. There are users and tasks belong to users. 

The user table should have this schema:
id
email
password(unhashed)
first_name
last_name
token
enabled
created_at
updated_at

There are two users created by default when starting the application: you@gmail.com and me@gmail.com

I had already setup a sql instance on my computer. To configure what sql instance it is pointing at, edit line 5 of models/index.js
Mine is currently sequelize = new Sequelize('sequelize_test', 'root', "")

To start the app, cd into the project directory and run
$node app.js