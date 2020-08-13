const express = require('express')
const app = express()
const port = 3008

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const routerv1 = require('./routes/routerv1')
const routerv2 = require('./routes/routerv2')

app.use('/api/v1', routerv1)

app.use('/api/v2', routerv2)

app.listen(port, () => console.log(`listen port ${port}`))