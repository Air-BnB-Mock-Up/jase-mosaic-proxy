const app = require('./server/httpHandler.js')
const faker = require('faker');
const {Photos, insert} = require('./server/db/dbHelper.js');


var count = -1;
class Seed {
  constructor() {
    console.log(faker)
    this.name = `${faker.hacker.adjective()} ${faker.hacker.ingverb()} home with ${faker.hacker.ingverb()} ${faker.hacker.noun()}`;
    this.rating = [`${(Math.random() * 5).toFixed(1).toString()}`, `${Math.floor(Math.random() * (500 - 10) + 10)}`]
    this.location = `${faker.address.city()}, ${faker.address.state()}`
    this.superhost = count % 2 === 0 ? true : false;
    this.imageURL = this.randomImages();
    this.locationID = this.counter();
  }

  counter () {
    count++;
    return count;
  }
  randomImages() {

    let buildingOrHouse = ['b', 'h'];
    let index = Math.floor(Math.random() * 2)
    let allIMG = {}
    let outsideDescription = [];
    let insideDescription = [];
    let outsideViews = [];
    let insideViews = [];

    for (let x = 0; x < 12; x++) {
      let randomNumber = faker.random.number(22);
      let outURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/${buildingOrHouse[index]}${randomNumber}.jpeg`;
      let inURL = `https://jaseairbnbmock.s3-us-west-1.amazonaws.com/FEC/r${randomNumber}.jpeg`;
      let outDESCRIPT = `${faker.hacker.adjective()} ${faker.hacker.ingverb()} home with ${faker.hacker.ingverb()} ${faker.hacker.noun()}`;
      let inDESCRIPT = `${faker.hacker.adjective()} room with ${faker.hacker.ingverb()} appliances`;
      outsideViews.push(outURL);
      insideViews.push(inURL);
      outsideDescription.push(outDESCRIPT);
      insideDescription.push(inDESCRIPT);
    }

    let randomImagesArray = outsideViews.concat(insideViews);
    let randomDescriptsArray = outsideDescription.concat(insideDescription);
    allIMG.images = randomImagesArray;
    allIMG.descriptions = randomDescriptsArray;
    return allIMG;
  }


}
const seeder = () => {
  for (let x = 0; x < 100; x++) {
    let seed = new Seed();
    insert(seed)
  }
}
seeder()

// let seed = new Seed();












