var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunely");

module.exports.Album = require('./album.js');
//we are going to add all our models here