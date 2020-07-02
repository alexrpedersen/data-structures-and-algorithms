
// Pseudo Code

```
ALGORITHM Mergesort(arr)
    DECLARE n <-- arr.length
           
    if n > 1
      DECLARE mid <-- n/2
      DECLARE left <-- arr[0...mid]
      DECLARE right <-- arr[mid...n]
      // sort the left side
      Mergesort(left)
      // sort the right side
      Mergesort(right)
      // merge the sorted left and right sides together
      Merge(left, right, arr)
ALGORITHM Merge(left, right, arr)
    DECLARE i <-- 0
    DECLARE j <-- 0
    DECLARE k <-- 0
    while i < left.length && j < right.length
        if left[i] <= right[j]
            arr[k] <-- left[i]
            i <-- i + 1
        else
            arr[k] <-- right[j]
            j <-- j + 1
            
        k <-- k + 1
    if i = left.length
       set remaining entries in arr to remaining values in right
    else
       set remaining entries in arr to remaining values in left
```

// Sample Arrays
// In your blog article, visually show the output of processing this input array:

// [8,4,23,42,16,15]

// For your own understanding, consider also stepping through these inputs:

// Reverse-sorted: [20,18,12,8,5,-2]
// Few uniques: [5,12,7,5,5,7]
// Nearly-sorted: [2,3,5,7,13,11]
// Implementation
// Provide a visual step through for each of the sample arrays based on the provided pseudo code
// Convert the pseudo-code into working code in your language
// Present a complete set of working tests
// Requirements
// Ensure your complete code solution follows the standard requirements.

// Write unit tests
// Follow the template for a well-formatted README
// Submit the assignment following these instructions
// Submission
// Submit a link to a pull request that contains your completed version of BLOG.md and your full working, tested code solution.

// Stretch Goal
// Share your article on LinkedIn, so that your network knows how awesome you are.

function mergeSort(arr){
    if(!arr.length || typeof arr !== 'object') throw new Error('Not Valid Input');
  
    let n = arr.length;
    if (n > 1){
      let mid = n/2;
      let left = arr.slice(0,mid);
      let right = arr.slice(mid);
  
      mergeSort(left);
      mergeSort(right);
      Merge(left, right, arr);
      console.log(arr);
    }
  }

  function Merge(left, right, arr){
    let l = 0;
    let r = 0;
    let i = 0;
  
    while( l < left.length && r < right.length){
      if(left[l] <= right[r]){
        arr[i] = left[l];
        l++;
      }else{
        arr[i] = right[r];
        r++;
      }
      i++;
    }
  
    if (l === left.length){
      for(r; r < right.length; r++){
        arr[i] = right[r];
        i++;
      }
    }else{
      for(l; l < left.length; l++){
        arr[i] = left[l];
        i++;
      }
    }
  }
  
  let x = [8,4,23,42,16,15];
  
  mergeSort(x);