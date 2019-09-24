const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoUri

mongoose.connect(db).then((data) => console.log("connected")).catch((err) => console.log(err))

const port = process.env.PORT || 5000

app.use('/api/item', require('./routes/api/items'))

app.listen(port , () => {
    console.log(`server started on port ${port}`)
})