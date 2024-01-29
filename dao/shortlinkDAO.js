const urlModel = require("../models/urlModel");

class shortlinkDAO {
  async save(url, shortlink){
    try{
      const doc = await urlModel.create({
        url: url,
        urlIdentifier: shortlink
      });

      if(!doc){
        throw new Error("Could not save the URL");
      }
      else{
        return doc.urlIdentifier;
      }
    }
    catch(error){
      throw error;
    }
  }

  async getUrl(shortlink){
    try{
      const doc = await urlModel.findOne({ urlIdentifier: shortlink});
      if (!doc) {
        throw new Error("The shortlink entered does not exist");
      }
      else {
        let data = {'url': doc.url};

        return data;
      }
    }
    catch(error){
      throw error;
    }
  }
}

module.exports = new shortlinkDAO();
