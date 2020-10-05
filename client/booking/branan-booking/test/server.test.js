const axios = require('axios');

const BLUE = 'http://localhost:1020';

const test = async function(name, fn) {
  const {result, msg} = await fn();
  if (result) {
    console.log(`\x1b[32mPASS: ${name}\x1b[0m`);
  } else {
    console.error(`\x1b[31mFAIL: ${name}\x1b[0m`);
    console.error(`\x1b[31m==> ${msg}\x1b[0m`);
  }
}

test('GET /book/:id gets proper schema from db', () => {

  return axios.get(`${BLUE}/book/20`)
    .then(data => {
      const entry = data.data;
      if (entry.placeID && entry.placeID !== 20) {
        return {result: false, msg: 'ID is not 20'};
      }
      if (entry.days && entry.days.find(d => isNaN(new Date(d).getTime()))) {
        return {result: false, msg: 'DB contains bad dates'};
      }
      if (entry.price && entry.price < 0) {
        return {result: false, msg: 'DB contains a bad price'};
      }
      return {result: true, msg: null};
    })
    .catch(why => ({result: false, msg: why}));

});