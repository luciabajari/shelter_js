const pool =require('./services/db');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')

app.use(cors())

var animal = require('./routers/animal')
var owner = require('./routers/owner')
var hospital = require('./routers/hospital')
var hotel = require('./routers/hotel')


app.get('/', (req, res) => res.send('Home Page'))

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