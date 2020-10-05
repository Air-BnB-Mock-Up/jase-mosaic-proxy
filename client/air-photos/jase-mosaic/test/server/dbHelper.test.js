////////////////////////////////////////
const mongoose = require('mongoose');
const { insert, getListing } = require('../../server/db/dbHelper.js');
const tester = 'servertest';
////////////////////////////////////////
// CONNECT TO MOCK DATABASE ////////////
beforeAll(async () => {
  await mongoose.connect(`mongodb://localhost/${tester}`,
  { useNewUrlParser: true, useUnifiedTopology: true})
})
////////////////////////////////////////
// VARIABLES ///////////////////////////
const locationID = 17
const invalidID = 101
const seed = {
  name: 'test',
  rating: '',
  location: '',
  superhost: null,
  imageURL: [],
  locationID: locationID
}
////////////////////////////////////////
// TESTING DB HELPER FUNCTIONS /////////
describe('Test database helper functions', () => {
  test('expect insert to be a function that passes in object with schema as single parameter', async () => {
    expect(typeof insert).toBe('function');

    await insert(seed)
      .then((data) => {
         expect(data).toBe('inserted')
      })
  });
  test('expect getListing to be a function that will receive specific data from same DB that you insert into', async () => {
    expect(typeof getListing).toBe('function');
    await getListing(locationID)
      .then((data) => {
        expect(data[0].name).toBe('test')
      });
  });
  test('expect getListing to behave correctly if passing in invalid ID as argument', async () => {
    await getListing(invalidID)
      .then((data) => {
        expect(data[0].length).toBe(0)
      })
      .catch((err) => {
        expect(typeof err).toBe('object')
      })
  })
});

/////////////////////////////////////////////////////////
// MAKES SURE IT DELETES ALL FROM ALL TEST COLLECTIONS //
async function reFreshTest () {
  const collections = Object.keys(mongoose.connection.collections)
  for (const collectionName of collections) {
    const collection = mongoose.connection.collections[collectionName]
    await collection.deleteMany()
  }
}
// WAITS FOR ALL TESTS TO RUN THEN ERASES
afterAll(async () => {
  await reFreshTest()
  mongoose.disconnect()
})
///////////////////////////////////////////////////////////

