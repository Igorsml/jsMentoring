const express = require('express'),
  app = express()

const host = '127.0.0.1'
const port = 7000

app.get('/', (req, res) => {
  let counter = 0
  counter += 5
  debugger
  res.send('Node js inspector')
})

app.listen(port, host, () =>
  console.log(`Server listens http://${host}:${port}`)
)