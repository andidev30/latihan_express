const express = require('express')
const app = express()
const port = 3008

const bodyParser = require('body-parser')

app.use(bodyParser.json())

const teamGhibah = [
    {
        id: 1,
        nama: "andi",
        alamat: "petakan"
    },
    {
        id: 2,
        nama: "kimi",
        alamat: "cikaraha"
    },
    {
        id: 3,
        nama: "gita",
        alamat: "cibuntu"
    }
]

app.get('/', (req, res) => {
    res.send('hello ganteng')
})

app.get('/teams', (req, res) => {
    res.send({team_ghibah : teamGhibah})
})

app.get('/team/:id', (req, res) => {
    const {id} = req.params
    const index = id - 1
    res.send({team_ghibah : teamGhibah[index]})
})

app.post('/team', (req, res) => {
    const teamGhibahBaru = [...teamGhibah, req.body]
    res.send({team_ghibah : teamGhibahBaru})
})

app.patch('/team/:id', (req, res) => {
    const {id} = req.params
    const index = id - 1
    teamGhibah[index] = {...teamGhibah[index], ...req.body}
    res.send({team_ghibah : teamGhibah[index]})
})

app.delete('/team/:id', (req, res) => {
    const {id} = req.params
    const teamGhibahHapus = teamGhibah.filter((teamGhibahHapus) => teamGhibahHapus.id != id)
    res.send({team_ghibah: teamGhibahHapus})
})

app.listen(port, () => console.log(`listen port ${port}`))