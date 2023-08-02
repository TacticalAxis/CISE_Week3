const mongoose = require('mongoose')

const MONGO_USER = process.env.MONGO_USER
const MONGO_PASS = process.env.MONGO_PASS
const MONGO_HOST = process.env.MONGO_HOST
const MONGO_DB = process.env.MONGO_DB

const db = `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_HOST}/${MONGO_DB}?retryWrites=true&w=majority`

const connectDB = async () => {
    try {
        mongoose.set('strictQuery', true)
        await mongoose.connect(db, {
            useNewUrlParser: true,
        })

        console.log('MongoDB is Connected.')
    } catch (err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB
