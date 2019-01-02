var express = require('express')
var router = express.Router()

const hospitalService = require('../services/hospital-service.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    try{
        res.send('Hospital home page')
    }catch(e){
        res.sendStatus(409);
    }
    next();
})

router.get('/:id', function (req, res, next) {
    try{
        res.send(req.params)
    }catch(e){
        res.sendStatus(404);
    }
    next();
})


module.exports = router