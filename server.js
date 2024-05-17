const dotenv = require('dotenv')
dotenv.config()
const mongoose = require('mongoose')
const express = require ('express')
const app = express()
const cors = require('cors')

mongoose.connect(process.env.MONGODB_URI)

mongoose.connection.on('connected', ()=> {
    console.log(`connected to mongoDB: ${mongoose.connection.name}`);
})

app.use(cors())
app.use(express.json())

const foodRouter = require('./controllers/foods.js')
app.use('/foods', foodRouter);

app.listen(3001, ()=> {
    console.log('server is running on port 3001')
})