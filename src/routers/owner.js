var express = require('express')
var router = express.Router()

const ownerService = require('../services/owner-service.js');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    ownerService.getOwners(res);
})

router.get('/:id', function (req, res, next) {
    ownerService.getOwner(req.params.id,res);
})

router.post('/', function (req, res,next) {
    try{
        res.send('Owner Post')
    }catch(e){
        res.sendStatus(404);
    }
    next();
})
router.put('/:id', function (req, res,next) {
    try{
        res.send(req.params)
    }catch(e){
        res.sendStatus(404);
    }
    next();
})

router.delete('/:id',function (req, res,next) {
    try{
        res.send(req.params)
    }catch(e){
        res.sendStatus(404);
    }
    next();
})



module.exports = router