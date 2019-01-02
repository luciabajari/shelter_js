var express = require('express')
var router = express.Router()

const ownerService = require('../services/owner-service.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    try{
        res.send('Owner home page')
    }catch(e){
        res.sendStatus(409);
    }
    next();
})

///?????????????????????? HIBA ????????????????????? 
router.get('/:id', function (req, res, next) {
    try{
        res.send(req.params)
    }catch(e){
        res.sendStatus(404);
    }
    next();
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