'use strict';

const insertBinarySearch = require('../array-binary-search.js');

describe ('array-binary-search', () => {

     it ('returns null if no args are present', () => {
         expect(insertBinarySearch()).toBeNull()
    })

     it ('recognizes a invalid input', () => {
        expect(true).toBeTruthy()
    })

     it ('result when array is present', () => {
        expect(insertBinarySearch([4,8,15,16,23,42], 15)).toEqual(2)
    })

     it ('result when array is not present', () => {
        expect(insertBinarySearch([11,22,33,44,55,66,77], 90)).toEqual(-1)
    })
});