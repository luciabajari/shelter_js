var express = require('express')
var router = express.Router()

const hospitalService = require('../services/hospital-service.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    hospitalService.getHospitals(res);
})

// router.get('/:id', function (req, res, next) {
//     hospitalService.getHospitals(req.params.id,res);
// })


module.exports = router