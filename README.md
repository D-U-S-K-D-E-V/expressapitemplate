# Express API Template
A simple template for Express.js built on Node.js to start an API project.

## Technology

Express.js

Node.js

CORS

Body-Parser

Nodemon

## How To Use
The API is a very simple start. All it can do right now is respond to a simple get and post request at:

Get: http://localhost:3000/test/testGet

Post: http://localhost:3000/test/testPost

The post requires a value in a json object that looks like this in the request body:

    {
      "data": "whatever data you want"
    }

for a proper test.

For additional functionality, you can add routes. For an API to use with a database, check out my template for an Express/MySQL API template.

