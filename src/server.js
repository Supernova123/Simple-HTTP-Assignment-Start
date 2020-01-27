// Matthew Castronova IGME 430
// Simple-HTTP-Assignment HW

// Gets required handlers
const http = require('http');
const htmlHandler = require('./htmlResponses.js');
const textHandler = require('./textResponses.js');
const jsonHandler = require('./jsonResponses.js');
const imageHandler = require('./imageResponses.js');

// Finds the available port
const port = process.env.PORT || process.env.NODE_PORT || 3000;


// Does the command when the webpage is called for
const onRequest = (request, response) => {
  // Logs requested command
  console.log(request.url);

  // Switch cases for different respones
  switch (request.url) {
    // HTML responses
    case '/':
      htmlHandler.getIndex(request, response);
      break;
    case '/page2':
      htmlHandler.getPage2(request, response);
      break;

    // Text responses
    case '/hello':
      textHandler.getHello(request, response);
      break;
    case '/time':
      textHandler.getTime(request, response);
      break;

    // JSON responses
    case '/helloJSON':
      jsonHandler.getHelloJSON(request, response);
      break;
    case '/timeJSON':
      jsonHandler.getTimeJSON(request, response);
      break;

    // Image responses
    case '/dankmemes':
      imageHandler.getImage(request, response);
      break;

    // Default response is a HTML response
    default:
      htmlHandler.getIndex(request, response);
      break;
  }
};

// Creates a server on the open port
http.createServer(onRequest).listen(port);

// Lists the port in use in the console
console.log(`Listening on 127.0.0.1 ${port}`);
