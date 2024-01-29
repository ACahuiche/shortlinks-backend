const validUrl = require('valid-url');
const shortlinkDAO = require ('../dao/shortlinkDAO.js');
const generalConfig = require ('../config/generalConfig.js');

const dictionary = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z',
                    'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z',
                    '1','2','3','4','5','6','7','8','9','0'];

class ShortlinkService {
  async saveUrl(url){
    let shortlink = '';

    if(!validUrl.isUri(url)){
      throw new Error("The url format is incorrect");
    }

    shortlink = this.createShortlink();

    return await shortlinkDAO.save(url, shortlink);
  }

  createShortlink(){
    let shortlink = '';

    for(let i = 0; i < generalConfig.uriSize; i++){
      const randomElement = dictionary[Math.floor(Math.random() * dictionary.length)];
      shortlink += randomElement;
    }

    return shortlink;
  }

  async getUrl(shortlink){
    if(shortlink.length == 0 || shortlink == null || shortlink == 'undefined' || shortlink == '') {
      throw new Error("The shortlink is empty");
    }

    return await shortlinkDAO.getUrl(shortlink);
  }
}

module.exports = new ShortlinkService();
