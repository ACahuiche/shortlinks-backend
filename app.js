const express = require("express");
const morgan = require("morgan");
const mongoosedb = require("./config/mongodbconnection");
const bodyParser = require("body-parser");
const cors = require('cors');
const port = 8030;
const app = express();

app.use(cors());

//parse application/json
app.use(bodyParser.json());

app.use(morgan("dev"));

const shortlinksRoutes = require ('./routes/shortlinksRoutes');

// EndPoints
app.use ('/', shortlinksRoutes);

app.listen(port, () => {
  console.log(`Shortlinks server running in port ${port}`);
});
