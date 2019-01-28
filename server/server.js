const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const PORT = process.env.PORT || 3030;

app.use(morgan('default'));

app.use(require('./middleware/health')());

// Everything else to index
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, './index.html'));
});


// API Routes
require('./api/routes/')(app);


app.listen(PORT);
console.log('Listening on... ' + PORT);


