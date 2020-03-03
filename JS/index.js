const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Pls')
})

module.exports = router