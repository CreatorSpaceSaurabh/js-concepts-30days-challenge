// Array Challenge
// Have the function ArrayChallenge (arr) take the array of positive integers stored in arr and return the length of the longest increasing subsequence (LIS). A LIS is a subset of the original list where the numbers are it sorted order, from lowest to highest, and are in increasing order. The sequence does not need to be contiguous or unique, and there can be several different subsequences. For example: if arT is [4, 3, 5, 1, 6] then a possible LIS is (3, 5, 6), and another is [1, 6). For this input, your program should return 3 because that is the length of the longest increasing subsequence.

// Approach 1
// JavaScript program to find longest
// contiguous subsequence

// Returns length of the longest
// contiguous subsequence
// function findLongestConseqSubseq(arr, n) {
//     let ans = 0, count = 0;

//     // sort the array
//     arr.sort(function (a, b) { return a - b; })

//     var v = [];
//     v.push(arr[0]);

//     //insert repeated elements only once in the vector
//     for (let i = 1; i < n; i++) {
//         if (arr[i] != arr[i - 1])
//             v.push(arr[i]);
//     }
//     // find the maximum length
//     // by traversing the array
//     for (let i = 0; i < v.length; i++) {

//         // Check if the current element is equal
//         // to previous element +1
//         if (i > 0 && v[i] == v[i - 1] + 1)
//             count++;
//         // reset the count
//         else
//             count = 1;

//         // update the maximum
//         ans = Math.max(ans, count);
//     }
//     return ans;
// }

// // Driver code

// let arr = [1, 2, 2, 3];
// let n = arr.length;
// console.log(
// "Length of the Longest contiguous subsequence is "
// +findLongestConseqSubseq(arr, n)
// );

// Approach 2 - Dynamic programming
function ArrayChallenge(arr) {
  if (arr.length === 0) return 0;

  let lis = Array(arr.length).fill(1);

  for (let i = 1; i < arr.length; i++) {
    for (let j = 0; j < i; j++) {
      if (arr[i] > arr[j] && lis[i] < lis[j] + 1) {
        lis[i] = lis[j] + 1;
      }
    }
  }

  return Math.max(...lis);
}

// Test cases
console.log(ArrayChallenge([9, 9, 4, 2])); // Output: 1
console.log(ArrayChallenge([10, 22, 9, 33, 21, 50, 41, 60, 22, 68, 90])); // Output: 7
console.log(ArrayChallenge([4, 3, 5, 1, 6])); // Output: 3
