// Convert array into matrix
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var matrix = [],
  i,
  k;

for (i = 0, k = -1; i < arr.length; i++) {
  if (i % 3 === 0) {
    k++;
    matrix[k] = [];
  }

  matrix[k].push(arr[i]);
}

console.log(matrix);
