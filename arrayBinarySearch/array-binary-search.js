'use strict';

//Write a function called BinarySearch which takes in 2 parameters: a sorted array and the search key. 

//Without utilizing any of the built-in methods available to your language, return the index of the array’s element that is equal to the search key, or -1 if the element does not exist.

//[4,8,15,16,23,42], 15	2
//[11,22,33,44,55,66,77], 90 -1

function binarySearch(arr, value){
    
    if (!arr || arr.length === 0 || !value){
        return null;
    }
    
    let notFound = arr.length;
    
    for (let i=0; i<arr.length; i++) {
        if(arr[i] === value){
            console.log(i); 
            notFound--;
            return i;
        };
        
        };
        if (notFound === arr.length){
            console.log(-1);
            return -1;
    }
}

binarySearch ([4,8,15,16,23,42], 15);
binarySearch ([11,22,33,44,55,66,77], 90);

module.exports = binarySearch;