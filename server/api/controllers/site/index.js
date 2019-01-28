const util = require('../../lib/utils.js');
const keys = require('../../config/keys/init');
const sendgrid = require('sendgrid');

module.exports = {
  sendContactForm
}

/**
 * Attempts to log the user in
 * @param {*} req 
 * @param {*} res 
 */

async function sendContactForm(req, res) {
  const sgMail = require('@sendgrid/mail');
  sgMail.setApiKey(keys.sgApiKey);

  const msg = {
    to: keys.sgSender,
    from: req.body.email,
    subject: 'Information for Jiu Jitsu',
    text: req.body.message,
    html: `<h3>Contact Details</h3>
          <ul>
            <li>${req.body.name}</li>
            <li>${req.body.email}</li>
            <li>${req.body.phone}</li>
          </ul>
          <h3>Message</h3>
          <p>${req.body.message}</p>`
  };

  console.log(msg);
  sgMail.send(msg);
  res.redirect('/');
}