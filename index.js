const express = require('express')
const app = express()
const port = 3008

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const router = require('./routes')

app.use('/api/v1', router)

app.listen(port, () => console.log(`listen port ${port}`))