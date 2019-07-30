'use strict'

const fs = require('fs');

const config = require('./config/app.json');
const appService = require('./services/app-service');
const cryptoService = require('./services/crypto-service');


function main(content, nounce) {
  let result = cryptoService.generateSalt(config.PLACEHOLDER, config.HASH_SIZE_LIMIT);
  let matches = Array(nounce).fill().map(_ => config.PREFIX).join('');

  let counter = 1;
  while (result.indexOf(config.PLACEHOLDER) >= 0) {
    const salt = content + counter;

    if (counter % 100000 === 0) {
      console.log(`[${counter}] ${salt}`);
    }

    let hashValue = cryptoService.getHash(salt);
    let index = parseInt(hashValue.charAt(nounce));

    if (hashValue.startsWith(matches) && !isNaN(index) && result.charAt(index) === config.PLACEHOLDER) {
      let modulo = counter % hashValue.length;
      let indexCharacter = hashValue.charAt(modulo);

      result = cryptoService.interchangeValues(result, index, indexCharacter);
      console.log(result);
    }
    ++counter;
  }

  console.log(`Final Result: ${result}`);
  return result;
};


if (require.main === module) {
  // node app.js file.txt
  if(process.argv.length !== 3) {
    appService.showErrorMessage('NO_INPUT_FILE');
    return;
  }

  const fileName = process.argv[2];
  const content = fs.readFileSync(fileName, config.ENCODING);
  const [salt, nounce] = content.split(config.SEPARATOR);

  if (salt && nounce) {
    main(salt, parseInt(nounce));
  } else {
    appService.showErrorMessage('NO_INPUT_FILE');
    return;
  }
}

module.exports = main;



