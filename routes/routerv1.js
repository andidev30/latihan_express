const express = require('express')
const router = express.Router()

const TeamGhibahController = require('../controller/TeamGhibahController');


//team ghibahController
router.get('/teams', TeamGhibahController.getAll)
router.get('/team/:id', TeamGhibahController.getOne)
router.post('/team', TeamGhibahController.store)
router.patch('/team/:id', TeamGhibahController.update)
router.delete('/team/:id', TeamGhibahController.destroy)

module.exports = router