# React-calendar

Данный виджет я написал достаточно давно, еще на классах. Сейчас я его переписал на хуки. На данный момент времени особой надобности в нем нет, календарей и так очень много. Когда он писался выбор был не велик, и вобщем-то для моей задачи ни один готовый календарь не подходил.

Это просто календарь, без наворотов. Я очень люблю яркие цвета, поэтому сделал его ярким. Второй момент, во всех приложениях в которых я его использовал, он стилизовался достаточно сильно. В качестве препроцессора я предпочитаю "SASS", и все часто меняемые параметры я вынес в переменные, если в переменных использовать яркие цвета становится проще понять, что нужно изменить. В него можно передать праздники, и если день выпадает на него, то, при наведении на этот день появляется подсказка с наименованием этого праздника. Первоначально он задумывался как производственный календарь (собственно говоря таковым он и был), потом это было частью приложения по составлению отпусков для сотрудников. В одной компании было 3 режима, календарь показывал католические и православные празники, дни рожденья сотрудников. В качестве шрифтов я использую "RobotoDraft", поэтому вам нужно будет его подключить, или изменить шрифт моего календаря самостоятельно. Вот ссылка на него:

 - \<link rel="stylesheet" href='https://fonts.googleapis.com/css?family=RobotoDraft:400,500|Material+Icons'\>

Для того, чтобы попробовать данный виджет, нужно скачать его и набрать в консоли "npm install". После установки всех зависимостей можно будет набрать 3 команды:

- "npm run dev" - запуск в режиме разработчика, будет доступен локальный сервер.
- "npm run build" - произойдет компиляция скриптов, локальный сервер запущен не будет.
- "npm run buildextract" - произойдет компиляция скриптов, так-же сгенерятся CSS-ки и HTML-шаблоны. Локальный сервер запущен не будет. Итоговые JS-файлы будут меньше, так как CSS-стили будут из них изъяты, но соответственно их нужно будет подключить в HTML-файлах самостоятельно.