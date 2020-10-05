//////////////////////////////////////////////////////////
const mongoose = require('mongoose');
//////////////////////////////////////////////////////////

const schema = new mongoose.Schema({
  name: String,
  rating: Array,
  location: String,
  superhost: String,
  imageURL: Object,
  locationID: Number
});

//////////////////////////////////////////////////
const Photos = mongoose.model('photos', schema);

module.exports.Photos = Photos;
///FUNCTIONS TO INTERACT WITH DB//////////////////
const insert = (seed) => {
  console.log(seed)
  return Photos.create(seed)
    .then((data) => {
      console.log('GO CHECK THAT DB')
      return 'inserted'
    })
    .catch((err) => {
      console.log(err, 'ERROR INSERTING')
    })
}
/////////////////////////////////////////////////////
const getListing = (locationID) => {
  return Photos.find({locationID})
    .then((photos) => {
      return photos;
    })
    .catch((err) => {
      console.log('ERROR GETTING');
    })
}
///////////////////////////////////
const deleteAll = () => {

}
module.exports.getListing = getListing;
module.exports.insert = insert;
///////////////////////////////////