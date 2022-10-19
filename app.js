require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose')

const app = express();

const DB_USER = process.env.DB_USER;
const DB_PASSWORD = process.env.DB_PASSWORD;

app.use(
    express.urlencoded({
        extended:true,
    }),
)

app.use(express.json())

app.get('/',(req, res) => {

    res.json({message:"hello world"})
})

mongoose
.connect(`mongodb+srv://${DB_USER}:${DB_PASSWORD}@cluster0.7846bzo.mongodb.net/?retryWrites=true&w=majority`)
.then(() => {
    console.log('conectado ao mongo')
})
.catch(err => console.log(err))

app.listen(3000)