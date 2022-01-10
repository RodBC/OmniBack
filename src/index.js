const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");
const app = express();

/*mongoose.connect('mongodb+srv://citi:citi2022@cluster0.rhbz9.mongodb.net/cluster0?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
*/


app.use(express.json());

app.use(routes);


app.listen(3000);