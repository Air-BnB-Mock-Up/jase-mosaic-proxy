///////////////////////////////////////////
// PROXY SERVER CONNECTION ////////////////
const { app } = require('./httpHandler.js')
const port = 3030;
app.listen(port, () => {
  console.log(`Serving up on localhost:${port}`)
})
