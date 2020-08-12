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

// exports.get = (req, res) => {
//     res.send('hello ganteng')
// }

exports.getAll = (req, res) => {
    res.send({team_ghibah : teamGhibah})
}

exports.getOne = (req, res) => {
    const {id} = req.params
    const index = id - 1
    res.send({team_ghibah : teamGhibah[index]})
}

exports.store = (req, res) => {
    const teamGhibahBaru = [...teamGhibah, req.body]
    res.send({team_ghibah : teamGhibahBaru})
}

exports.update = (req, res) => {
    const {id} = req.params
    const index = id - 1
    teamGhibah[index] = {...teamGhibah[index], ...req.body}
    res.send({team_ghibah : teamGhibah[index]})
}

exports.destroy = (req, res) => {
    const {id} = req.params
    const teamGhibahHapus = teamGhibah.filter((teamGhibahHapus) => teamGhibahHapus.id != id)
    res.send({team_ghibah: teamGhibahHapus})
}
