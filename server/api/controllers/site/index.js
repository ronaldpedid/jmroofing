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

    function truncateDate(date) {
      if (date.length > 10) {
        return date.substring(0, 10);
      }
    }

    const newPhoNum = formatPhoneNumber(req.body.phone);
    const newDate = truncateDate(req.body.startDate);
    console.log(req.body);
    const msg = {
      to: 'jmroofing93@live.com',
      from: req.body.email,
      subject: 'Request for Estimate',
      text: req.body.projectType,
      html:
        `<style>
        .header{
          height: 600px;
          width: 600px;
          margin: 0 auto;
        }

        .headline-logo{
          font-size: 24px;
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
      <h1 class="headline-logo">JM Roofing LLC.</h1>
      <h3 class="headline">Personal Details</h3>
        <ul class="ul">
          <li class="li">Name: ${req.body.firstName} ${req.body.lastName}</li>
          <li class="li">Address: ${req.body.street} ${req.body.city}</li>
          <li class="li">Email: ${req.body.email}</li>
          <li class="li">Phone Number: ${newPhoNum}</li>
          <li class="li">Best Time to Reach: ${req.body.timeToReach}</li>
          <li class="li">Communitcation Pref: ${req.body.commPref}</li>
        </ul>
      <h3 class="headline">Work Details</h3>
            <ul class="ul">
              <li class="li">Budget: $ ${req.body.budget}</li>
              <li class="li">Start Date: ${newDate}</li>
              <li class="li">Project Type: ${req.body.projectType}</li>
              <li class="li">Project Description: ${req.body.projectDesc}</li>
            </ul>`


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