// Handles JSON responses

// Get constants from text responses
const text = require('./textResponses.js');

// Dispalys hello text as JSON
const getHelloJSON = (request, response) => {
  // Gets hello text and converts it to JSON
  const helloJSON = {
    message: text.hello,
  };
  const stringMessage = JSON.stringify(helloJSON);

  // Write new JSON message
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

// Dispalys current time text as JSON
const getTimeJSON = (request, response) => {
  // Gets time text and converts it to JSON
  const timeJSON = {
    time: text.getTimeString(),
  };
  const stringMessage = JSON.stringify(timeJSON);

  // Writes new JSON message
  response.writeHead(200, { 'Content-Type': 'application/json' });
  response.write(stringMessage);
  response.end();
};


// Exports JSON functions
module.exports.getHelloJSON = getHelloJSON;
module.exports.getTimeJSON = getTimeJSON;
