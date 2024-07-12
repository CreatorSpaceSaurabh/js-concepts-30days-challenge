// Find the output for following
let input = "sssmmmnnnAAAmmmmmaaaaAAAAA";
// Output: s3 m3 n3 A3 m5 a4 A5

const countConsecutiveChars = (str) => {
  let len = str.length;
  let currWord = str.charAt(0);
  let count = 1;
  let result = "";
  for (let i = 1; i < len; i++) {
    if (currWord === str[i]) {
      count++;
    } else {
      result += `${currWord}${count} `;
      currWord = str[i];
      count = 1;
    }
  }

  return (result += `${currWord}${count} `);
};

const result = countConsecutiveChars(input);
console.log("Result ==", result);
