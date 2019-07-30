const crypto = require('crypto');

class CryptoService{

  getHash(content, algo='md5') {
    return crypto.createHash(algo).update(content).digest('hex');
  };

  interchangeValues(content, source, destination) {
    return `${content.substr(0, source)}${destination}${content.substr(source + destination.length)}`;
  };

  generateSalt(character, n) {
    let res = '' + character;
    while (--n > 0) {
      res += character;
    }
    return res;
  };

};


module.exports = new CryptoService();