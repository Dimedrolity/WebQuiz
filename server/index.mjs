import express from "express";
import * as path from "path";
import formidableMiddleware from "express-formidable";
import hbs from "express-handlebars";
import Quiz from "./quiz.mjs"

const app = express();
const rootDir = process.cwd();

const port = 5002;

app.listen(port, function () {
    console.log(`Example app listening on port ${port}!`);
});

app.use('/static', express.static('static'));

// Выбираем в качестве движка шаблонов Handlebars
app.set("view engine", "hbs");
// Настраиваем пути и дефолтный view
app.engine(
    "hbs",
    hbs({
        extname: "hbs",
        defaultView: "default",
        layoutsDir: path.join(rootDir, "/views/layouts/")
    })
);

app.use(formidableMiddleware());

app.get('/', function (req, res) {
    res.render("quizzes", {
        layout: "default",
        quizzes: allQuizzes
    });
});

const allQuizzes = [
    new Quiz('Какой тигр самый крупный?',
        ['Амурский', 'Малазийский', 'Индийский', 'Суматранский'],
        0,
        '/static/img/tiger.png'),

    new Quiz('Где живет коала?',
        ['В горной пещере', 'В бамбуковом лесу', 'В тропических лесах Новой Зеландии', 'На эвкалиптовом дереве'],
        3,
        '/static/img/koala.png'),

    new Quiz('Какого цвета хвост у зебры?',
        ['Белый', 'Черный', 'Серый', 'Коричневый'],
        1,
        '/static/img/zebra.png'),

    new Quiz('Какое животное самое быстрое?',
        ['Лев', 'Зебра', 'Сапсан', 'Гепард'],
        3,
        '/static/img/fast.png'),
];

app.post('/api/send-form', function (req, res) {

    const userAnswers = Object.entries(req.fields);
    let rightVariantsCount = 0;

    for (const [key, value] of userAnswers) {
        const quizIndex = parseInt(key);
        const rightVariantIndex = allQuizzes[quizIndex].rightVariantIndex;

        const selectedVariantIndex = parseInt(value);

        if (selectedVariantIndex === rightVariantIndex)
            rightVariantsCount++;
    }

    res.send(JSON.stringify(rightVariantsCount));
});