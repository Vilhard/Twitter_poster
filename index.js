const express = require("express");
const app = express();
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const bodyParser = require("body-parser");
const tweets = require("./routes/tweets");
app.use(cors());

app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.render("index", {});
});

// Tweet route
app.use("/tweets", tweets);

app.listen(PORT, () => console.log(`Server started at port ${PORT}`));
