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
    const animals = animalService.getAnimals();
    try{
        res.send(animals)
    }catch(e){
        res.sendStatus(409);
    }
    next();
})

// define the cats route
router.get('/cats', function (req, res) {
    try{
        res.send('Cats html works!')
    }catch(e){
        res.sendStatus(404);
    }
    next();
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
    const { animalId } = req.params;
    console.log("animalId:",animalId);
    try{
        res.send(req.params)
    }catch(e){
        res.sendStatus(404);
    }
    next();
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