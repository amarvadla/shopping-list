const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()

app.use(bodyParser.json())

const db = require('./config/keys').mongoUri

mongoose.connect(db).then((data) => console.log("connected")).catch((err) => console.log(err))

const port = process.env.PORT || 5000

app.use('/api/item', require('./routes/api/items'))

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}

app.listen(port, () => {
    console.log(`server started on port ${port}`)
})