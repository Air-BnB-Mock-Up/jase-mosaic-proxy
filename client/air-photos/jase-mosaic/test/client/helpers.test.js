import React from 'react';
import renderer from 'react-test-renderer';
import { getInfo } from '../../client/src/helpers/httpHandler.js';
import {info, photos, gather, capitalize} from '../../client/src/helpers/store.js';

describe('Client side httpHandler should behave as expected', () => {
  const PHOTO_LOC_ID = 20;
  const returnPhotos = (photos) => photos;

  test('getInfo should be a function that retrieves data from server-side database and uses store to modify format', async () => {
    await expect(typeof getInfo).toEqual('function');
    return getInfo(PHOTO_LOC_ID, (data) => {
      expect(Array.isArray(data)).toEqual(true);
      expect(data.length).toEqual(2);
      const information = data[0];
      const photoInfo = data[1];

      expect(typeof information.name).toEqual('string');

      expect(Array.isArray(information.rating)).toEqual(true);
      expect(information.rating.length).toEqual(2);

      expect(typeof information.location).toEqual('string');

      expect(typeof information.superhost).toEqual('string');

      expect(Array.isArray(photoInfo.descriptions)).toBe(true);
      expect(Array.isArray(photoInfo.images)).toBe(true)
    })
  })
})



describe('Store should handle raw data from httpHandler and return useable form', () => {
  test('Info and Photos should exist and have correct types', () => {
    expect(typeof info).toEqual('object');
    expect(typeof photos).toEqual('object');
  })

  test('Capitalize should modify any string to have capitalized first letter', () => {
    expect(typeof capitalize).toEqual('function');
    expect(capitalize('hello')).toEqual('Hello');
    let lowercase = ['hello', 'again', 'world'];
    let uppercase = capitalize(lowercase)
    expect(uppercase).toEqual(['Hello', 'Again', 'World']);
  })
})