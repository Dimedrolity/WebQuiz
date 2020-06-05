# WebQuiz
решаем таск по основам веб-программирования

## Quiz

Сегодня мы сделаем приложение полностью: с пустой папки, с сервером, npm-скриптом, сервером и клиентом.

1. Создай пустой репозиторий на github.com, назови его quiz.
 Поделись правами на запись в этот репозиторий со своим напарником.
2. Склонируй снаружи от текущего проекта этот пустой репозиторий. Вся работа сегодня будет вестись там. 
Для удобства можешь скопировать этот файл туда.
3. В терминале (в нашем склонированном проекте) выполни команду `npm init`. В гайде по настройке package.json
 соглашайся на все дефолтные настройки (жми enter)
4. Выполни команду `npm install express`
5. Создай папку `static`, положи в нее файл `index.html` c каким-нибудь текстом (чтобы проверить, что он загружается)
6. В корне директории `quiz` создай файл `server.js`. Напиши в этом файле код статического сервера: чтобы он слушал
какой-то порт и умел отдавать статику из папки `static`
7. В разделе `scripts` в `package.json` напиши скрипт `start`, который будет выполнять команду `node server.js`
8. Выполни команду `npm start`: она должна запустить твой сервер, а при открытии локалхоста на том порте, который ты
указал, должен отдаваться твой `index.html`
9. Закоммить и запушь получившиеся файлы (кстати, нельзя комитить папку node_modules, можно ее добавить в .gitignore)
10. Следующую работу постарайтесь разделить с напарником так, чтобы часть работы делал каждый из вас 
и делайте регулярно коммиты, чтобы делиться друг с другом кодом. Делать будем вот такое приложение ![](quiz.png)
11. Чтобы не верстать все руками, воспользуйся CSS фреймворком — [Bootstrap](https://getbootstrap.com/).
Тут [инструкция](https://getbootstrap.com/docs/4.4/getting-started/introduction/#starter-template),
 как подключить его к себе на проект.
12. На сервере сделай, чтобы по какому-то запросу в каком-то формате (попробуй выбрать хороший путь и 
подходящий формат для данных) отдавался список вопросов.
13. На клиенте сверстай при помощи бутстрапа опрос. Скорее всего, все, что тебе уже нужно, в бутстрапе уже есть,
 надо только правильно воспользоваться правильными классами.
14. На сервере сделай возможность получать результат заполнения опроса и возвращай количество правильных ответов.
15. На клиенте научись получать данные для отображения вопросов с сервера.
16. Научись отправлять с клиента результаты прохождения опроса на сервер и показывай каким-нибудь способом
 количество баллов за опрос. 
17. *Сделай лидерборд: на клиенте и на сервере поддержи возможность посмотреть на рейтинг по опросу.
 Для этого придется еще спрашивать имя пользователя. 
