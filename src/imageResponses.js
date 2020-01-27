// Handles image responses

// Pulls in the file system module
const fs = require('fs'); // Pull in the file system module

// Reads image
const image = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

// Displays given image
const getImage = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'image/png' });
  response.write(image);
  response.end();
};

// Exports image function
module.exports.getImage = getImage;
