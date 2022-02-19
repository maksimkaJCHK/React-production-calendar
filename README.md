# React-production-calendar

Данный виджет я написал достаточно давно, еще на классах. Сейчас я его переписал на хуки. На данный момент времени особой надобности в нем нет, календарей и так очень много, хотя может кому-нибудь он и пригодится. Когда он писался выбор был не велик, и вобщем-то для моей задачи ни один готовый календарь не подходил.

Это просто календарь, без наворотов. Я очень люблю яркие цвета, поэтому сделал его ярким. Цвета для него я брал из библиотеки "Material Design". Второй момент, во всех приложениях в которых я его использовал, он стилизовался достаточно сильно. В качестве препроцессора я предпочитаю "SASS", и все часто меняемые параметры я вынес в переменные, если в переменных использовать яркие цвета становится проще понять, что нужно изменить. В него можно передать праздники, и если день выпадает на него, то, при наведении на этот день, появляется подсказка с наименованием этого праздника. Первоначально он задумывался как производственный календарь (собственно говоря таковым он и был), потом это было частью приложения по составлению отпусков для сотрудников. В одной компании было 3 режима, календарь показывал католические и православные празники, дни рожденья сотрудников. В качестве шрифтов я использую "RobotoDraft", поэтому вам нужно будет его подключить, или изменить шрифт моего календаря самостоятельно, как это сделать я опишу ниже. Вот ссылка на этот шрифт:

```
<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500|Material+Icons'\>
```

## Установка

Для того, чтобы попробовать данный виджет, существует 2 способа:

- Набрать в консоли "npm install react-production-calendar";
- Скачать проект из [данного репозитория](https://github.com/maksimkaJCHK/react-production-calendar).

Если вы поставили виджет через "npm", то подключить его можно следующим способом:

```
import Calendar from 'react-production-calendar'
```

Если же вы скачали проект с github-а, то вы можете подключить его одним из следующих способов:

- Из папки "src/calendar";
- Из папки "lib"

В папке lib лежит проект откомпилированный под 11 IE, в папке "src/calendar" вы можете компилировать виджет как вам будет угодно.

Ну и конечно же календарь выводится следующим способом:

```
<Calendar \/>
```

Необходимые параметры я опишу ниже.

По умолчанию виджет будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-without-style.html). Понятно, что это как-то не гуд. Чтобы он выглядел получше вам стоит подключить CSS, соответственно у вас должен быть установлен "style-loader" и "css-loader". 

Подключить можно следующие CSS-ки:

```
import 'react-production-calendar/lib/styles/calendar-reset-styles.css';
```

Тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-reset.html). Здесь самые минимальные стили, не внутренних отступов, ничего, только подсветка даты, праздников, и текущей даты, все остальное вам придется стилизовывать самим. Допускаю, что это может быть удобно, если у вас есть дизайн календаря, тогда не нужно будет перебивать много стилей.

```
import 'react-production-calendar/lib/styles/calendar-type.css';
```

Тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-type.html). Здесь календарь более менее выглядит прилично, но все таки его нужно будет достилизовать.

```
import 'react-production-calendar/lib/styles/calendar-dark.css';
```

Тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/calendar-dark.html). Тут применяется темная тема календаря.

```
import 'react-production-calendar/lib/styles/calendar.css';
```

Тогда календарь будет выглядеть [вот так](http://sass-lessons.ru/calendar/index.html). Тут календарь стилизован в стиле "Material Design".

Смотрите, вам все равно придется стилизовать календарь. Как я выше писал, он у меня стилизовывался достаточно сильно. Поэтому, я вам советую взять [следующие стили](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/calendar/styles/calendar.scss ). Здесь я самые типовые вещи, которые наиболее часто меняю вынес в переменные, цвета сделаны яркими, чтобы было понятно что менять, тут можно шрифт изменить, цвета и внутренние отступы. Я использую препроцессор "SASS", соответсвенно вам нужно будет его установить и настроить, если вы этого не умеете, посмотрите как я это настраиваю в [данном проекте](https://github.com/maksimkaJCHK/react-production-calendar). Так будет проще всего.

## Примеры реализации

Если вы хотите посмотреть, что можно сделать при помощи данного календаря, то вот ссылки:

- [Производственный календарь на 2022 год](http://sass-lessons.ru/calendar/production-calendar.html);
- [Календарь стилизованный под разные сезоны](http://sass-lessons.ru/calendar/seasons.html). На одном проекте у меня разные сезоны были выделены по разному. В данном примере, я стилизовывал сезоны под "Material Design". Вот [тут](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/seasons.js) можете посмотреть код на JS, вот тут код на ["SASS"](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/seasons.scss);
- [Часть CRM-ки](http://sass-lessons.ru/calendar/birthday-schedule.html), вобщем здесь HR-менеджер может выбрать день рождения сотрудника. Все аякс запросы я отсюда удалил, базы данных у меня нет. В реальном проекте можно было выбрать фото сотрудника, отдел, заполнить его предпочтения. Когда пользователь заходил на данную страницу отображались дни рождения сотрудников на данной неделе. Понятно, что пример учебный, мне нужно показать пример календаря, поэтому все это я отсюда убрал, но идея должна быть понятной. Кликайте на даты, заполняйте поля, сохраняйте, удаляйте их. Все сходства с реальными сотрудниками являются случайными)))) JS код лежит [здесь](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/birthday_schedule.js), SASS код лежит [здесь](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/birthdays.scss).
- [Пример того, как можно изменять класс календаря](http://sass-lessons.ru/calendar/calendar-change-class.html). Смотрите, подсказка когда наводишь на праздник по умолчанию у меня отображается под ячейкой таблицы. В данном примере я рассчитываю входит ли подсказка, и в зависимости от этого меняю класс, так она будет отображаться выше ячейки. Вот [тут](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/calendar_change_class.js) можете посмотреть код на JS, вот тут код на ["SASS"](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/examples/pages/calendarChangeClass.scss);

## Параметры

- lang - язык моего календаря. По умолчанию русский. Доступны следующие языки - 'ru' | 'en' | 'de' | 'fr' | 'su'. [Пример реализации](http://sass-lessons.ru/calendar/calendar-localization.html).
- year - год моего календаря. По умолчанию 2021. Собственно говоря какой год хотите вывести, такой и вводите.
- month - месяц моего календаря. По умолчанию 1. Тут стоит оговорится, что месяц начинается с 1. 1 - январь, 12 - декабрь. Когда я только начинал писать данный виджет, он делался под конкретный проект, и там была такая нумерация месяцев, в JS месяцы начинаются с 0.
- visibleYear - параметр указывающий стоит ли указывать год в шапке календаря. Первоначально календарь был производственным, а в производственном календаре, год как правило пишется отдельно. Доступные параметры true | false.
- startDayWeek - определяет с какого дня недели календарь будет начинаться, по умолчанию 1 те начальный день понедельник. 0 - начальный день воскресенье. Доступные значения 0 | 1.
- holiday -  массив объектов указывающий на конкретный праздник. Для начала давайте посмотрим празники в [2022 году](https://github.com/maksimkaJCHK/react-production-calendar/blob/main/src/holidays/holiday.js). Обязательными параметрами являются year, month, day. Тут внимание, month должен начинаться с 0. 0 - январь, 11 - декабрь. Когда я только начинал делать проект, там уже были месяцы, они начинались с 1. Нам нужно было отображать праздники, их мы уже делали по нормальному, напомню, что в JS месяцы начинаются с 0. Не обязательными параметрами  являются class и hint. Часто бывают такие даты которые и не праздники, и в тоже время эту дату нужно как-то выделить, если вы напишите что-то в class, то это будет классом, для данной даты. К примеру в 2022 году 5 марта суббота является рабочим днем. Я для данной даты в class записал "workDay". А дальше определил стили, и данная дата отображается не как выходной день. Так же я стилизовывал православные и католические праздники, для одного проекта. Если  class пустой, то применится класс "holiday" для данной даты. hint - это массив объектов, объект содержит "title" - заголовок подсказки и "desc" - текст подсказки. Это подсказка которая будет появляться при наведении. Как я выше писал параметры class и hint не являются обязательными.
- handleClick - функция которая будет срабатывать при клике на день календаря. Данная функция принимает два параметра, число миллисекунд, прошедших с 1 января 1970. При помощи данной функции и определенных умений можно превратить календарь в органайзер. Посмотрите [пример](http://sass-lessons.ru/calendar/birthday-schedule.html). И саму ячейку, так мы можем к примеру узнать отступы сверху и снизу. Посмотрите выше пример смены класса календаря.
- handleMouseOver - функция которая будет срабатывать при наведении мыши на день календаря. Принимает те же параметры, что и handleClick выше.
- handleMouseOut - функция которая будет срабатывать когда мышка уходит с дня календаря. Принимает те же параметры, что и handleClick выше.
- calClass - класс для календаря. У меня таких ситуаций не возникало, я обычно стилизовал календарь через родителя, но тем не менее. Какой текст вы здесь напишите, такой класс и добавится к календарю.

## Примеры

Если вы хотите более детально посмотреть примеры, то вам стоит скачать [данный репозиторий](https://github.com/maksimkaJCHK/react-production-calendar). И набрать в консоли команду "npm install", естественно, у вас должен быть установлен node.js. После установки будут доступны следующие команды:

```
npm run dev
```
Запуск в режиме разработчика, будет доступен локальный сервер.

```
npm run build
```

Произойдет компиляция скриптов, локальный сервер запущен не будет.

```
npm run buildextract
```

Произойдет компиляция скриптов, так-же сгенерятся CSS-ки и HTML-шаблоны. Локальный сервер запущен не будет. Итоговые JS-файлы будут меньше, так как CSS-стили будут из них изъяты, но соответственно их нужно будет подключить в HTML-файлах самостоятельно.

Примеры лежат в папке "src/examples/".