const express = require('express')
const app = express()
const port = 8080
const { client } = require('pg')

//Sends response to the client
app.get('/', (req, res) => res.status(200).send('Yeah it worked...'))
//Listens for a request on port 8080
app.listen(port, () => console.log (`listening on port ${port}`))

app.set('view engine', 'ejs')
