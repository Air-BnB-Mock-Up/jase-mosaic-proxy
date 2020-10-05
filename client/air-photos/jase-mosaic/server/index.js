/////////////////////////////////////////
// START SERVER /////////////////////////
const app = require('./httpHandler');
const port = 1000;
  app.listen(port, () => {
    console.log(`Served on localhost:${port}`);
  })


