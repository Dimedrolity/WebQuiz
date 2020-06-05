import express from "express";
import * as path from "path";

const app = express();
const rootDir = process.cwd();

const port = 5002;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});


//app.use(express.static('static'));
app.use('/static', express.static('static'));

app.get('/', function (req, res) {
  //res.sendFile(`./static/index.html`);
  //res.sendFile(path.join('WebQuiz/', '../static', 'index.html'));
  res.sendFile(path.join(rootDir, "static/index.html"));
});



class Quiz {
  constructor(question, variants, answer, image) {
    this.question = question;
    this.variants = variants;
    this.answer = answer;
    this.image = image;
  }
}

const allQuizes= [
  new Quiz('Какой тигр самый крупный?', ['Амурский', 'Малазийский', 'Индийский', 'Суматранский'], 'Амурский', '/static/img/tiger.png'),
  new Quiz('Где живет коала?', ['В горной пещере', 'В бамбуковом лесу', 'В тропических лесах Новой Зеландии', 'На эвкалиптовом дереве' ], 'Человек', '/static/img/koala.png')
];

app.get('/get-quizes', function (req, res) {
  
  console.log(allQuizes);
  res.send(JSON.stringify(allQuizes));
});