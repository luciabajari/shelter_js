const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.post('/animal', function (req, res) {
    console.log(req)
    res.send('Got a POST request')
  })

  app.delete('/animal',function (req, res) {
    console.log(req)
    res.send('Got a DELET request on /')
  })

app.put('/user', function (req, res) {
    res.send('Got a PUT request at /user')
})
  
app.delete('/user', function (req, res) {
res.send('Got a DELETE request at /user')
})
  