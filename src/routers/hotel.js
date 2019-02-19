var express = require('express')
var router = express.Router()

const hotelService = require('../services/hotel-service.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    hotelService.getHotel(res);
})


module.exports = router