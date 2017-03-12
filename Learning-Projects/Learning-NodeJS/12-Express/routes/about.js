var express = require('express');
var router = express.Router();
let videoData =  require("../videodata.json");

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('about', {
        title: "About me",
        videoData: videoData
    });
});

module.exports = router;
