var express = require("express");

// Import the model to use its database functions.
var cat = require("../models/burger.js");

var router = express.Router();




// Export routes for server.js to use.
module.exports = router;