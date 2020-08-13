const express = require('express')
const router = express.Router()

const bookController = require('../controller/bookController')

router.get('/books', bookController.shows);
router.get('/book/:id', bookController.show);
router.post('/book', bookController.store);

module.exports = router