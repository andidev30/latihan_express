const {book} = require("../models")

exports.shows = async (req, res) => {
    try {
        const result = await book.findAll()

        res.status(200).send({
            message: "response success",
            data: {
                result
            }
        })
    } catch (e) {
        console.log(e)
    }
}

exports.show = async (req, res) => {
    try {
        const {
            id
        } = req.params
        const result = await book.findOne({
            where: {
                id
            }
        })

        if (!result) return res.status(400).send({
            message: `book with ${id} is not existed`
        })

        res.status(200).send({
            message: "response success",
            data : {
                result
            }
        })
    } catch (e) {
        console.log(e)
        res.status(500).send({
            error : {
                message : "Internal Server Error"
            }
        })
    }
}

exports.store = async (req, res) => {
    try {
        const response = book.create(req.body)

        res.status(200).send({
            message: "response success",
            data: {
                response: response
            }
        })
    } catch (e) {
        res.status(500).send({
            error : {
                message: "internal Server Error"
            }
        })
    }
}