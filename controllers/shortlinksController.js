const shortlinksService = require ('../services/shortlinksService');

class ShortlinksController {
  async saveUrl(req, res) {
    let newUrlData = req.body.urlToSave;
    try {
      let urlSave = await shortlinksService.saveUrl(newUrlData);
      res.status(200).json({
        success:true,
        message: urlSave
      }); 
    }
    catch(error) {
      res.status(401).json({
        success: false,
        message: `${error}`
      });
    }
  }

  async getShortlink(req, res) {
    let shortlink = req.params.shortlink;
    try {
      let getUrl = await shortlinksService.getUrl(shortlink);
      res.status(200).json({
        success:true,
        message: getUrl
      });
    }
    catch(error) {
      res.status(200).json({
        success: false,
        message: `URL error: ${error}`
      });
    }
  }
}

module.exports = new ShortlinksController();
