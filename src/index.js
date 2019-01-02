const express = require('express')
const app = express()
const port = 3000

var animal = require('./routers/animal')
var owner = require('./routers/owner')
var hospital = require('./routers/hospital')
var hotel = require('./routers/hotel')


app.get('/', (req, res) => res.send('Home Page'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.use((req, res, next) => {
  console.log(`Request processing finished: ${Date.now()}`);
  next();
});


app.use('/animal', animal)
app.use('/owner', owner)
app.use('/hospital', hospital)
app.use('/hotel', hotel)