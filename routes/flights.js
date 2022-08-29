const express = require('express')
const router = express.Router()
const {getHome, search} = require('../controllers/flights') //Tenemos que manejar destructuración

router.get('/', getHome)
router.get('/search', search)

module.exports = router