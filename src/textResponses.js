// Handles text responses

// Default text constant
const hello = 'Hello World';

// Time text constant
const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

// Displays hello world text
const getHello = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(hello);
  response.end();
};

// Dispalys current time in text
const getTime = (request, response) => {
  response.writeHead(200, { 'Content-Type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

// Export constants and response functions
module.exports.hello = hello;
module.exports.getTimeString = getTimeString;
module.exports.getHello = getHello;
module.exports.getTime = getTime;
