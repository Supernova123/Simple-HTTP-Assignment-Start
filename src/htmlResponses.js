// Handles HTML responses

// Pulls in the file system module
const fs = require('fs');

// Reads the HTML pages synchronously
const index = fs.readFileSync(`${__dirname}/../client/client.html`);
const page2 = fs.readFileSync(`${__dirname}/../client/client2.html`);

// Get index page
const getIndex = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(index);
  response.end();
};

// Get page 2
const getPage2 = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write(page2);
  response.end();
};

// Export HTML pages
module.exports.getIndex = getIndex;
module.exports.getPage2 = getPage2;
