var express = require('express')
var router = express.Router()

const animalService = require('../services/animal-service.js');


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})
// define the home page route
router.get('/', function (req, res, next) {
    animalService.getAnimals(res);
})

// define the cats route
router.get('/cats', function (req, res) {
    try{
        res.send('Cats html works!')
    }catch(e){
        res.sendStatus(404);
    }
})
router.get('/dogs', function (req, res,next) {
    try{
        res.send('Dogs html works!')
    }catch(e){
        res.sendStatus(404);
    }
    next();
})

///?????????????????????? HIBA ????????????????????? 
router.get('/:id', function (req, res, next) {
    console.log(req.params)
    animalService.getAnimal(req.params.id,res);
})

router.post('/', function (req, res,next) {
    try{
        res.send('Animal Post')
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