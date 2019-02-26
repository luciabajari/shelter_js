const pool =require('./services/db');
const express = require('express')
const app = express()
const port = 3000
const cors = require('cors')
const bodyParser = require("body-parser");

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