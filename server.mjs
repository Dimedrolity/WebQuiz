import express from "express";
import * as path from "path";
import Quiz from "./quiz.mjs"

const app = express();
const rootDir = process.cwd();

const port = 5002;

app.listen(port, function () {
  console.log(`Example app listening on port ${port}!`);
});

app.use('/static', express.static('static'));

app.get('/', function (req, res) {
  res.sendFile(path.join(rootDir, "static/index.html"));
});

const allQuizzes = [
  new Quiz('Какой тигр самый крупный?',
    ['Амурский', 'Малазийский', 'Индийский', 'Суматранский'],
    'Амурский',
    '/static/img/tiger.png'),

  new Quiz('Где живет коала?',
    ['В горной пещере', 'В бамбуковом лесу', 'В тропических лесах Новой Зеландии', 'На эвкалиптовом дереве'],
    'На эвкалиптовом дереве',
    '/static/img/koala.png'),

  new Quiz('Какого цвета хвост у зебры?',
    ['Белый', 'Черный', 'Серый', 'Коричневый'],
    'Черный',
    '/static/img/zebra.png'),

  new Quiz('Какое животное самое быстрое?',
    ['Лев', 'Зебра', 'Сапсан', 'Гепард'],
    'Гепард',
    '/static/img/fast.png'),
];

app.get('/api/get-quizzes', function (req, res) {
  console.log(allQuizzes);
  res.send(JSON.stringify(allQuizzes));
});