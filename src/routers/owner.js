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
    ownerService.ownerRegistration(res);
})
router.put('/:id', function (req, res,next) {
    ownerService.ownerModify(req.params.id,res);
})

router.delete('/:id',function (req, res,next) {
    ownerService.ownerDelete(req.params.id,res)
})



module.exports = router