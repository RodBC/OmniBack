const express = require("express");
const routes = require("./routes");
const mongoose = require("mongoose");

const app = express();

mongoose.connect('mongodb://citi:citi2022@citi-shard-00-00.rhbz9.mongodb.net:27017,citi-shard-00-01.rhbz9.mongodb.net:27017,citi-shard-00-02.rhbz9.mongodb.net:27017/citi?ssl=true&replicaSet=atlas-1dwsn4-shard-0&authSource=admin&retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.use(express.json());
app.use(routes);

app.listen(3333);
