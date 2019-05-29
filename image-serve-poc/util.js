const fs = require('fs');

function imageToBase64(file) {
    const image = fs.readFileSync(file);
    return new Buffer(image).toString('base64');
}

function urlsafe64(base64) {
    return base64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function normal64(base64) {
    return base64.replace(/\-/g, '+').replace(/_/g, '/') + '=='.substring(0, (3*base64.length)%4);
}

module.exports = {
	imageToBase64: imageToBase64,
	urlsafe64: urlsafe64,
	normal64: normal64
}