const pool =require('./services/db');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require("body-parser");
const jwt  = require('jsonwebtoken');
const ownerService = require('./services/owner-service.js');

/** bodyParser.urlencoded(options)
 * Parses the text as URL encoded data (which is how browsers tend to send form data from regular forms set to POST)
 * and exposes the resulting object (containing the keys and values) on req.body
 */
app.use(bodyParser.urlencoded({
    extended: true
}));

/**bodyParser.json(options)
 * Parses the text as JSON and exposes the resulting object on req.body.
 */
app.use(bodyParser.json());

app.use(cors())

var animal = require('./routers/animal')
var owner = require('./routers/owner')
var hospital = require('./routers/hospital')
var hotel = require('./routers/hotel')


app.get('/', (req, res) => res.send('Home Page'))




app.post('/api/posts', verifyToken,function (req, res,next) {
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

app.post('/login', function (req,res){
  //Mock user
  console.log("BODY NAME: "+req.body.name)
  const user= ownerService.ownerLogin(req.body.name,res);
 // console.log("User ", ownerService.ownerLogin(req.body.name,res))
  //  const user={
  //      id:1,
  //      username:"loginUser",
  //      email:"login@gmail"
  //  }
   jwt.sign({user:user},'secretKey', (err, token)=>{
     res.json({
       token
     });

   });
})

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

const server = app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use((req, res, next) => {
  console.log(`Request processing finished: ${Date.now()}`);
  next();
});


process.on('SIGTERM', shutDown);
process.on('SIGINT', shutDown);

function shutDown() {
  pool.end(function (err) {
    server.close(() => {
      console.log('Closed out remaining connections');
      process.exit(0);
    });
  });
}

app.use('/animal', animal)
app.use('/owner', owner)
app.use('/hospital', hospital)
app.use('/hotel', hotel)