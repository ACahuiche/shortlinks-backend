const dbconn = require("../config/mongodbconnection");
const { Schema } = dbconn;

const uriInfo = new Schema({
  url: {
    type: String,
    required: true
  },
  urlIdentifier: {
    type: String,
    required: true
  }
});

module.exports = dbconn.model("shortlink", uriInfo);
