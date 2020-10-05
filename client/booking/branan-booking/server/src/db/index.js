const mongoose = require('mongoose');

const conn = mongoose.createConnection('mongodb://localhost/booking', {useNewUrlParser: true, useUnifiedTopology: true});
const BookSchema = new mongoose.Schema({
  placeID: Number,
  days: [Date],
  price: Number,
  max: Number
});
const Book = conn.model('Book', BookSchema);

module.exports = {
  Book: Book,
  end: () => conn.close()
}