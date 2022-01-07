const express = require("express");

const app = express();

app.get('/', (request, response) => {
    return response.send('new message');
} );

app.listen(3333);

