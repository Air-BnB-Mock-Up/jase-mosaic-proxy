const db = require('../server/src/db');

const now = new Date();

let acc = [];
for (let i = 0; i < 100; i++) {
  var days = [];
  var day = 0;
  const max = Math.floor(Math.random() * 6) + 2;
  let price = Math.floor(Math.random() * 120) + 30;
  for (let k = 0; k < 100; k++) {
    day += Math.floor(Math.random() * 3) + 1;
    days.push(new Date(now.getFullYear(), now.getMonth(), day));
  }
  acc.push({placeID: i, days, price, max});
}

db.Book.insertMany(acc).then(db.end);