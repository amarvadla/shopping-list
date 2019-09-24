const items = require('../../models/Items')
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    items.find().sort({ date: -1 }).then(items => res.json(items))
})

router.post('/', (req, res) => {
    var item = new items({
        name: req.body.name,
        date: req.body.date
    })

    item.save().then((data) => {
        res.json({
            statusCode: 1,
            statusMessage: 'success'
        })
    }).catch((err) => {
        res.json(err)
    })
})


router.delete('/:id', (req, res) => {

    items.findById(req.params.id).then((item) => {
        item.remove().then((data) => {
            res.json("deleted successfully")
        })
    }).catch((err) => {
        res.json(err)
    })

})

module.exports = router