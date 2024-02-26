// Create web server
// 1. Create a web server
// 2. Create a route for the home page
// 3. Create a route for the comments page
// 4. Create a route for a single comment
// 5. Create a route for the about page
// 6. Create a 404 route
// 7. Listen on port 3000

// 1. Create a web server
var express = require('express');
var app = express();

// 2. Create a route for the home page
app.get('/', function(request, response) {
  response.send('Welcome to the home page!');
});

// 3. Create a route for the comments page
app.get('/comments', function(request, response) {
  response.send('Welcome to the comments page!');
});

// 4. Create a route for a single comment
app.get('/comments/:id', function(request, response) {
  response.send('Welcome to comment #' + request.params.id);
});

// 5. Create a route for the about page
app.get('/about', function(request, response) {
  response.send('Welcome to the about page!');
});

// 6. Create a 404 route
app.get('*', function(request, response) {
  response.send('404 - Page not found');
});

// 7. Listen on port 3000
app.listen(3000, function() {
  console.log('Listening on port 3000');
});