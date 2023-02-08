const express = require('express')
const router = express.Router()
const {getHome, search, getCreateFlightForm} = require('../controllers/flights') //Tenemos que manejar destructuración

router.get('/', getHome)
router.get('/search', search)
router.get('/admin/flight/create', getCreateFlightForm)

module.exports = router