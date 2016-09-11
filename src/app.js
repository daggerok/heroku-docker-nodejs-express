const express = require('express');
const os = require("os");
const app = express();
let port = 8080;

if (process.env.PORT) {
  port = process.env.PORT;
}

app.get('/', (req, res) => res.send('hi!'));
app.listen(port);

console.log(`checout http://${os.hostname()}:${port}!`);
