// *****Asymmetric key encrption using RSA and AES*****

//****Understanding processes ****
/** Here’s how it works:
The encryption process we will follow involves a combination of asymmetric (RSA) and symmetric (AES) encryption algorithms. 

1. The client generates a random symmetric key (AESKey) and an initialization vector (IV) for each encryption operation.
2. The server provides its public RSA key in PEM format. The client will use this public key to encrypt the symmetric key (AESKey) using the RSA-OAEP encryption scheme.
3. The client encrypts the sensitive payload data (e.g., username and password) using the generated symmetric key (AESKey) and the initialization vector (IV) with AES-CBC encryption.
4. The client sends the encrypted payload and the encrypted symmetric key to the server.
5. The server uses its private RSA key to decrypt the received symmetric key, enabling it to decrypt the payload securely. 
**/
let forge = require("node-forge");

const encryptAESKey = (AESKey, publicKey) => {
  const publicKeyPem = forge.pki.publicKeyFromPem(publicKey);
  const rsaEncryptedAesKey = publicKeyPem.encrypt(AESKey, "RSA-OAEP");
  return forge.util.encode64(rsaEncryptedAesKey);
};

const encryptText = (text, key, iv) => {
  const cipher = forge.cipher.createCipher("AES-CBC", key);
  cipher.start({ iv: iv });
  cipher.update(forge.util.createBuffer(text));
  cipher.finish();
  const encrypted = cipher.output;
  return encrypted.toHex();
};

const encryptPayload = (payload) => {
  // Generate a random symmetric key for AES encryption
  const symmetricKey = forge.random.getBytesSync(16);
  const iv = forge.random.getBytesSync(16);

  // server's public RSA key (replace this with the actual key)
  const serverPublicKey =
    '"-----BEGIN PRIVATE KEY----- ... ------END PRIVATE KEY-----\n"';

  // Encrypt the symmetric key with the server's public RSA key
  const encryptedSymmetricKey = encryptAESKey(symmetricKey, serverPublicKey);

  // Encrypt the payload using the generated symmetric key
  const encryptedPayload = encryptText(
    JSON.stringify(payload),
    symmetricKey,
    iv
  );

  return {
    esk: encryptedSymmetricKey.toString(),
    rep: forge.util.encode64(iv + encryptedPayload),
  };
};

// *** Method calling ***
const payload = {
  username: "CreatorSpace",
  password: "Cre@toR",
};

const encryptedData = encryptPayload(payload);
console.log("Encrypted Data:", encryptedData);
