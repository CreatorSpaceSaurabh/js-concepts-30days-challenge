// ****Day 24 - JS - Convert String to Snake case****
const str = "Welcome Coders";

const toSnakeCase = (strng) => {
  let removedSpaceStr = strng.replace(" ", "");
  let finalStr = removedSpaceStr.replace(
    /[A-Z]/g,
    (x) => "_" + x.substring().toLowerCase()
  );
  return finalStr.substring(1);
};

console.log("To SnakeCase- ", toSnakeCase(str));
