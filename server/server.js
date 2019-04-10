const express = require('express');
const app = express();
const path = require('path');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const PORT = process.env.PORT || 3030;

//default logging with morgan
app.use(morgan('default'));

//required for docker health cheaks
app.use(require('./middleware/health')());

app.use(bodyParser()); //needed to get access to req.body
app.use(bodyParser.urlencoded({ extended: true })); //needed to resolve deprecation error +  encodes url data

// Everything else to index - this is needed for react-router/browser-router to do it's thing.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});

//Connecting our API Routes to our app
require('./api/routes/')(app);

//app is listening always
app.listen(PORT);
console.log('Listening on... ' + PORT);


