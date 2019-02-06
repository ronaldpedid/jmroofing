const util = require('../../lib/utils.js');
const keys = require('../../config/keys/init');
const sendgrid = require('sendgrid');

module.exports = {
  sendContactForm
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

//ended up in gmail spam folder
//sent right to @live.com inbox -- working = true

async function sendContactForm(req, res) {
  try {
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(keys.sgApiKey);

    function formatPhoneNumber(phoneNumberString) {
      var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
      var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
      if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
      }
      return null
    }

    const newPhoNum = formatPhoneNumber(req.body.phone);
    const msg = {
      to: 'ronaldpedid@live.com',
      from: req.body.email,
      subject: 'Hello from Node!',
      text: req.body.message,
      html:
        `<style>
        .header{
          height: 600px;
          width: 600px;
          margin: 0 auto;
        }

        .headline{
          font-size: 26px;
          padding: 10px;
          background-color: gray;
        }

        .ul{
          list-style-type: none;
        }

        .li{
          font-size: 18px;
        }
      </style>
      <img class="header" src="http://hyde-development.com/061517/wp-content/uploads/2017/05/placeholder-Lyndale.jpg" />
      <h3 class="headline">Contact Details</h3>
            <ul class="ul">
              <li class="li">${req.body.name}</li>
              <li class="li">${req.body.email}</li>
              <li class="li">${newPhoNum}</li>
            </ul>
            <h3 class="headline">Message</h3>
            <p>${req.body.message}</p>`
    };
    console.log(msg);
    sgMail.send(msg);
  } catch (err) {
    res.status(500);
    console.log(err);
    res.json({ error: 'Error in site/index.js.' })
  }
}

const clientList = ['elementfayt@gmail.com',
  'ronaldpedid@live.com'];