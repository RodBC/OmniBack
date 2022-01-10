const mongoose = require("mongoose");

const DevSchema = new mongoose.Schema({
    email: String,
    github_username: String,
    bio = String,
    avatar_url = String,
    tech = [String],


});
module.exports = mongoose.model("Dev", DevSchema);

