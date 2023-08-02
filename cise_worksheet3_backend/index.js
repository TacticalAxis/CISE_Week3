// app.js

const express = require('express')
const dotenv = require('dotenv')
dotenv.config({ path: './.env' })

// add books route
const books = require('./app/routes/api/books')

const connectDB = require('./app/config/db')

const app = express()

// Connect Database
const db = connectDB()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.use('/api/books', books)

const port = process.env.SERVER_PORT || 8082
app.listen(port, () => console.log(`Server running on port ${port}`))
