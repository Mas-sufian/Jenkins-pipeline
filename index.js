//File: index.js
//const express = require('express');
//const app = express();

//app.get('/', (req, res) => {
  res.send('Hello World!');
//});

//app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
//});

//File: index.js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
