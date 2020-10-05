
export const info = {
  name: '',
  rating: '',
  location: '',
  superhost: null,
}
export var photos = {};

export const gather = (listing) => {
  listing = listing.data[0];

  info.name = capitalize(listing.name);
  info.rating = listing.rating;
  info.location = listing.location;
  info.superhost = listing.superhost;
  photos.images = listing.imageURL.images;
  photos.descriptions = capitalize(listing.imageURL.descriptions);
  return ([info, photos]);
}

export const capitalize = (stringOrArray) => {
  if (typeof stringOrArray === 'string') {
    let string = stringOrArray;
    string = string.split('');
    string[0] = string[0].toUpperCase();
    return string.join('');
  } else {
    return stringOrArray.map((string) => {
      string = string.split('');
      string[0] = string[0].toUpperCase();
      return string.join('');
    })
  }
}