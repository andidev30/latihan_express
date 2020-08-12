const express = require('express')
const router = express.Router()

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

router.get('/', (req, res) => {
    res.send('hello ganteng')
})

router.get('/teams', (req, res) => {
    res.send({team_ghibah : teamGhibah})
})

router.get('/team/:id', (req, res) => {
    const {id} = req.params
    const index = id - 1
    res.send({team_ghibah : teamGhibah[index]})
})

router.post('/team', (req, res) => {
    const teamGhibahBaru = [...teamGhibah, req.body]
    res.send({team_ghibah : teamGhibahBaru})
})

router.patch('/team/:id', (req, res) => {
    const {id} = req.params
    const index = id - 1
    teamGhibah[index] = {...teamGhibah[index], ...req.body}
    res.send({team_ghibah : teamGhibah[index]})
})

router.delete('/team/:id', (req, res) => {
    const {id} = req.params
    const teamGhibahHapus = teamGhibah.filter((teamGhibahHapus) => teamGhibahHapus.id != id)
    res.send({team_ghibah: teamGhibahHapus})
})

module.exports = router