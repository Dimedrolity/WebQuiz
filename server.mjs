import express from "express";
const app = express();

app.use(express.static('static'));

app.get('/', function (req, res) {
  res.sendfile(`index.html`);
});

const port = 5002;


app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});