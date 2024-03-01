var mongoose = require("mongoose");

mongoose.connect(`${process.env.LOCAL_CONNECTION}/${process.env.DATABASENAME}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then((db)=>console.log("Database connection success"))
.catch((err) => console.log(`Error: ${err}`));

module.exports = mongoose;
