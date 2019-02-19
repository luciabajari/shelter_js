var express = require('express')
var router = express.Router()

const animalService = require('../services/animal-service.js');

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
    animalService.getCats(res);
})

router.get('/dogs', function (req, res,next) {
    animalService.getDogs(res);
})

///?????????????????????? HIBA ????????????????????? 
router.get('/:id', function (req, res, next) {
    console.log(req.params)
    animalService.getAnimal(req.params.id,res);
})

router.post('/', function (req, res,next) {
    
    animalService.animalRegistration("Animal",10,res); //???
})
router.put('/:id', function (req, res,next) {
    animalService.animalModify(req.params.id,res)
})

router.delete('/:id',function (req, res,next) {
    animalService.animalDelete(req.params.id,res)
})



module.exports = router