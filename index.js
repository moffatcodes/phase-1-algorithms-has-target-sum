function hasTargetSum(array, target) {
  // Write your algorithm here
    const hashMap = {};

    for (let i = 0; i < array.length; i++) {
      const difference = target - array[i];

      if (hashMap[difference] !== undefined) {
        return true;
      }

      hashMap[array[i]] = i;
    }

    return false;
}


 /*Write the Big O time complexity of your function here

 The time complexity of the hasTargetSum function is O(n), 
 where n is the length of the input array. This is because 
 the function iterates through the array once in a for loop,
  performing constant time operations (such as hash map lookups 
    and assignments) inside the loop. Therefore,
  the overall time complexity is linear with respect to the size 
  of the input array.

/* 
  Add your pseudocode here
  Define a function named hasTargetSum that accepts an array and a target sum as parameters.
Initialize a hashmap.
Loop through each element in the array, and for each element, do the following:
-Compute the difference between the target sum and the current element.
-If the difference is already in the hashmap, return true.
-Otherwise, add the current element to the hashmap with its index as the value.
If the loop completes without finding a pair that sums to the target, return false.
*/

/*
  Add written explanation of your solution here
The hasTargetSum function is designed to determine if there are two 
numbers in the given array that can be summed up to equal the given target value.
The algorithm uses a hash map to keep track of the numbers
 encountered in the array. It iterates through each element in the array 
 using a for loop. For each element, it calculates the difference between 
 the target and the current element, and checks if this difference 
 exists as a key in the hashMap. If it does, that means there is another
  element in the array that can be added to the current element to obtain 
  the target value, and the function returns true.
If no such pair is found after checking all elements in the array, the function 
returns false, indicating that there are no two numbers in the array that can 
be summed up to equal the target value.
The hash map is used to store previously encountered elements as keys,
 with their corresponding indices as values. This allows for quick and 
 efficient lookups to determine if the required complement exists in the
  array without the need for nested loops, resulting in a time complexity of 
  O(n), where n is the length of the input array.
*/

// You can run `node index.js` to view these console logs

// Test case 3
if (hasTargetSum([1, 2, 5], 4) === false) {
  console.log("Test case 3 passed");
} else {
  console.error("Test case 3 failed");
}

// Test case 4
if (hasTargetSum([-7, 10, 4, 8], 3) === true) {
  console.log("Test case 4 passed");
} else {
  console.error("Test case 4 failed");
}

// Test case 5
if (hasTargetSum([1, 2, 3, 4], 5) === true) {
  console.log("Test case 5 passed");
} else {
  console.error("Test case 5 failed");
}

// Test case 6
if (hasTargetSum([2, 2, 3, 3], 4) === true) {
  console.log("Test case 6 passed");
} else {
  console.error("Test case 6 failed");
}

// Test case 7
if (hasTargetSum([4], 5) === false) {
  console.log("Test case 7 passed");
} else {
  console.error("Test case 7 failed");
}



 
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
