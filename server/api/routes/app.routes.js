const util = require('../lib/utils.js');
const site = require('../controllers/site/');

module.exports = function (app) {
  app.options('/api/contact/*', util.asJSON, util.options);
  app.post('/api/contact/send', util.asJSON, site.sendContactForm);
  app.get('/api/contact/test', util.asJSON, (req, res) => {
    res.json({
      hello: "world"
    });
  })
}