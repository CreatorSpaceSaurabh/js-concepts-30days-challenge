// ****Day 23 - JS - Convert String to camelCase****

const str = "Welcome Coders";

const toCamelCase = (strng) => {
  let removedSpaceStr = strng.replace(" ", "");
  let finalStr =
    removedSpaceStr.charAt(0).toLowerCase() + removedSpaceStr.substring(1);
  return finalStr;
};

console.log("To CamelCase- ", toCamelCase(str));
