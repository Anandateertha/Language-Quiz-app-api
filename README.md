# Brief description of the web application
This is the backend repository for language learning quiz web application. In this application user should answer the questions related to which language they want to learn or which language they have selected.

# How to setup locally?
1. Fork the repository.
2. Open the terminal and paste the below command by making the changes.
```
https://github.com/<your-username>/Language-Quiz-app-api.git
```
3. Paste the below command to go into the directory. 
```
cd Language-Quiz-app-api
```
4. Run the below command after cloning into your directory to install all the packages
```
npm install
```
5. Start the Docker Deamon in your system. Because this uses docker to store the users and the questions in a docker container where the postgres image is used.
6. After starting Docker, run the below command in your vscode termianl.
```
docker compose up -d
```
7. Now paste the below link in .env file for the prisma to get the database url.
 ```
   postgresql://postgres:threads@localhost:5432/threads?schema=public
   ```
8. Now to create the migrations paste the below command in the terminal as paer of prisma.
```
npx prisma migrate dev --name init
```
9. Now you can run the application by using the below command.
```
node index.js
```

# Now you can test the endpoints in Postman or ThunderClient in VSCode itself.
These are the authentication routes
1. http://localhost:5000/api/auth/createuser
2. http://localhost:5000/api/auth/login
3. http://localhost:5000/api/auth/getuser

These are routes for the operations performede to the questions.
1. http://localhost:5000/api/questions/fetchallquestions
2. http://localhost:5000/api/questions/addquestion
