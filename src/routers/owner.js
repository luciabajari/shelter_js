var express = require('express')
var router = express.Router()
const jwt  = require('jsonwebtoken');


//FORMAT OF TOKEN
//Authorization: Bearer  <access_token>

//Verify Token
function verifyToken(req,res,next){
    // Get auth header value
    const bearereHeader = req.headers['authorization'];
    //check is bearer is undefined
    console.log("BearerHeader: ",bearereHeader)
    if(typeof bearereHeader !== 'undefined' ){
        //Split at the space
        const bearer =bearereHeader.split(' ');
        //Get token from array
        const bearerToken=bearer[1];
        //Set the token
        req.token=bearerToken;
        //Next middleware
        next();
    // res.sendStatus(200);
    }else{
      //Forbidden
      res.sendStatus(403);
    }
  
  }

const ownerService = require('../services/owner-service.js');

router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})

router.get('/', function (req, res, next) {
    
    ownerService.getOwners(res);
})
router.post('/login', verifyToken,function (req, res,next) {
    //ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole
   // console.log("Login pw::: ",req.body.password)
    //ownerService.ownerLogin(req.body.name,req.body.password,res);
    jwt.verify(req.token,'secretKey', (err,authData)=>{
        if(err){
            res.sendStatus(403);
        }else{
            res.json({
                message:'Post created...',
                authData
            });
        }
    });

    
})

router.get('/:id', verifyToken, function (req, res, next) {
    ownerService.getOwner(req.params.id,res);
})



router.post('/', function (req, res,next) {
    //ownerName,ownerEmail,ownerAddress,ownerPhoneNum,ownerPassword,ownerRole
    console.log("PHONE::: ",req.body.phoneNumber)
    
    ownerService.ownerRegistration(req.body.name,req.body.email,req.body.address,req.body.phoneNumber,req.body.password,req.body.role,res);
    
})
router.put('/:id', function (req, res,next) {
    ownerService.ownerModify(req.params.id,req.body.name,req.body.email,req.body.address,req.body.phoneNumber,req.body.password,req.body.role,res);
})

router.delete('/:id',function (req, res,next) {
    ownerService.ownerDelete(req.params.id,res)
})



module.exports = router