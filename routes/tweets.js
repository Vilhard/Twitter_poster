var express = require("express");
var router = express.Router();
require("dotenv").config();
var Twit = require("twit");
const bodyParser = require("body-parser");

var T = new Twit({
  consumer_key: process.env.TWITTER_CONSUMER_KEY,
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  access_token: process.env.TWITTER_ACCESS_TOKEN_KEY,
  access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

// create application/x-www-form-urlencoded parser
var urlencodedParser = bodyParser.urlencoded({ extended: true });

router.post("/", urlencodedParser, (req, response) => {
  const twt = req.body.twt;
  T.post("statuses/update", { status: twt }, (error, data, res) => {
    if (error) {
      response.sendStatus(400);
    } else {
      response.sendStatus(200);
    }
  });
});

module.exports = router;
