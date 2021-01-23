# React-production-calendar

Данный виджет я написал достаточно давно, еще на классах. Сейчас я его переписал на хуки. На данный момент времени особой надобности в нем нет, календарей и так очень много, хотя может кому-нибудь он и пригодится. Когда он писался выбор был не велик, и вобщем-то для моей задачи ни один готовый календарь не подходил.

Это просто календарь, без наворотов. Я очень люблю яркие цвета, поэтому сделал его ярким. Цвета для него я брал из библиотеки "Material Design". Второй момент, во всех приложениях в которых я его использовал, он стилизовался достаточно сильно. В качестве препроцессора я предпочитаю "SASS", и все часто меняемые параметры я вынес в переменные, если в переменных использовать яркие цвета становится проще понять, что нужно изменить. В него можно передать праздники, и если день выпадает на него, то, при наведении на этот день, появляется подсказка с наименованием этого праздника. Первоначально он задумывался как производственный календарь (собственно говоря таковым он и был), потом это было частью приложения по составлению отпусков для сотрудников. В одной компании было 3 режима, календарь показывал католические и православные празники, дни рожденья сотрудников. В качестве шрифтов я использую "RobotoDraft", поэтому вам нужно будет его подключить, или изменить шрифт моего календаря самостоятельно, как это сделать я опишу ниже. Вот ссылка на этот шрифт:

 - \<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500|Material+Icons'\>

## Установка

Для того, чтобы попробовать данный виджет, существует 2 способа:

- Набрать в консоли "npm install react-production-calendar";
- Скачать проект из [данного репозитория](https://github.com/maksimkaJCHK/react-production-calendar ).

Если вы поставили виджет через "npm", то подключить его можно следующим способом:

- import Calendar from 'react-production-calendar'.

Если же вы скачали проект с github-а, то вы можете подключить его одним из следующих способов:

- Из папки "src/calendar";
- Из папки "lib"

В папке lib лежит проект откомпилированный под 11 IE, в папке "src/calendar" вы можете компилировать виджет как вам будет угодно.

По умолчанию виджет будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-without-style.html ). Понятно, что это как-то не гуд. Чтобы он выглядел получше вам стоит подключить CSS, соответственно у вас должен быть установлен "style-loader" и "css-loader". Подключить можно следующие CSS-ки:

- import 'react-production-calendar/lib/styles/calendar-reset-styles.css', и тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-reset.html). Здесь самые минимальные стили, не внутренних отступов, ничего, только подсветка даты, праздников, и текущей даты, все остальное вам придется стилизовывать самим. Допускаю, что это может быть удобно, если у вас есть дизайн календаря, тогда не нужно будет перебивать много стилей.
- import 'react-production-calendar/lib/styles/calendar-type.css', и тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-type.html). Здесь календарь более менее выглядит прилично, но все таки его нужно будет достилизовать.
- import 'react-production-calendar/lib/styles/calendar.css', и тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/index.html). Тут календарь стилизован в сстиле "Material Design".

Смотрите, вам все равно придется стилизовывать календарь. Как я выше писал, он у меня стилизовывался достаточно сильно. Поэтому, я вам советую взять [следующие стили](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/calendar/styles/calendar.scss), здесь я самые типовые вещи, которые наиболее часто меняю вынес в переменные, цвета сделаны яркими, чтобы было понятно что менять, тут можно шрифт изменить, цвета и внутренние отступы. Я использую препроцессор "SASS" соответсвенно вам нужно будет его установить и настроить, если вы этого не умеете, посмотрите как я это настраиваю в [данном проекте](https://github.com/maksimkaJCHK/react-production-calendar). Так будет проще всего.

Если вы хотите посмотреть, что можно сделать при помощи данного календаря, то вот ссылки:

- [Производственный календарь на 2021 год](http://sass-lessons.ru/calendar/production-calendar.html);
- [Календарь стилизованный под разные сезоны](http://sass-lessons.ru/calendar/seasons.html). На одном проекте у меня разные сезоны были выделены по разному. В данном примере, я стилизовывал сезоны под "Material Design". Вот [тут](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/birthday_schedule.js) код на JS, вот тут код на ["SASS"](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/seasons.scss);
- [Часть CRM-ки](http://sass-lessons.ru/calendar/birthday-schedule.html), вобщем здесь HR-менеджер может выбрать день рожденья сотрудника. Все аякс запросы я отсюда удалил, базы данных у меня нет. В реальном проекте можно было выбрать фото сотрудника, отдел, заполнить его предпостения. Когда пользователь заходил на данную страницу отображались дни рождения сотрудников на данной неделе. Понятно, что пример учебный, мне нужно показать пример календаря, поэтому все это я отсюда убрал, но идея должна быть понятной. Кликайте на даты заполняйте поля, сохраняйте, удаляйте их. Все сходства с реальными сотрудниками являются случайными)))) JS код лежит [здесь](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/birthday_schedule.js), SASS код лежит [здесь](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/birthdays.scss).

Ниже представлены команды, как работать с проектом.

- "npm run dev" - запуск в режиме разработчика, будет доступен локальный сервер.
- "npm run build" - произойдет компиляция скриптов, локальный сервер запущен не будет.
- "npm run buildextract" - произойдет компиляция скриптов, так-же сгенерятся CSS-ки и HTML-шаблоны. Локальный сервер запущен не будет. Итоговые JS-файлы будут меньше, так как CSS-стили будут из них изъяты, но соответственно их нужно будет подключить в HTML-файлах самостоятельно.