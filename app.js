
const express = require("express");
const app = express();

const   Sequelize =  require("sequelize");

const  port = process.env.PORT || 8080;

app.get("/",(req,res)=>{
    res.send("Hello World")
});

const user = 'postgres'
const host = 'host.docker.internal'
const database = 'postgres'
const password = '1521Fh@123'
const dbport = '5432'

const sequelize = new Sequelize(database, user, password, {
    host,
    dbport,
    dialect: 'postgres',
    logging: false
  });
  sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(port,()=>console.log(`App is listening on ${port}`));