let forge = require("node-forge");

/**
 * Encrypt by 3DES using node-forge
 * @param input utf8 string
 * @param key key is hashed by md5 and shorten to maximum 192 bits
 * @returns {String} Output is a base64 string
 */
function encrypt3DES(input, key) {
  var md5Key = forge.md.md5.create();
  md5Key.update(key);
  md5Key = md5Key.digest().toHex();

  var cipher = forge.cipher.createCipher("3DES-ECB", md5Key.substring(0, 24));
  cipher.start();
  cipher.update(
    forge.util.createBuffer(Buffer.from(input, "utf8").toString("binary"))
  );
  cipher.finish();
  var encrypted = cipher.output;

  return Buffer.from(encrypted.getBytes(), "binary").toString("base64");
}

/**
 * Decrypt by 3DES using node-forge
 * @param input A base64 sring
 * @param key key is hashed by md5 and shorten to maximum 192 bits
 * @returns {String} A utf8 string
 */
function decrypt3DES(input, key) {
  let md5Key = forge.md.md5.create();
  md5Key.update(key);
  md5Key = md5Key.digest().toHex();
  const decipher = forge.cipher.createDecipher(
    "3DES-ECB",
    md5Key.substring(0, 24)
  );
  decipher.start();

  const inputEx = forge.util.createBuffer(
    Buffer.from(input, "base64").toString("binary")
  );
  decipher.update(inputEx);
  decipher.finish();
  const decrypted = decipher.output;
  return Buffer.from(decrypted.getBytes(), "binary").toString("utf8");
}

let input = "Welcome to the digital playground";
let keyP = "hash";
let encryptedData = encrypt3DES(input, keyP);
console.log("Encrypted data -", encryptedData);
let decryptedData = decrypt3DES(encryptedData, keyP);
console.log("Decrypted data -", decryptedData);
