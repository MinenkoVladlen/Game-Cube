# Game-Cube

Онлайн приложение "Кубики". Для того, что бы начать необходимо 
нажать на кнопку "Start". При клике на кубик он исчезает и по мере
убирания кубиков появляются новые в случайном количестве 
(от 0 до 2).  Уборка каждого кубика приносит 1 очко игроку. 
Цель игры - за 1 минуту набрать наибольшее количество очков.
На одну игру, игроку предоставляется 1 минута времени. 
Количество оставшегося времени, вы можете наблюдать в поле 
"Time". Во время игры вы так же можете сделать паузу, нажав 
"Pause", в это время клик на кубики не будет выполняться, а таймер 
остановится. Что бы продолжить необходимо нажать клавишу "Start",
таймер продолжит свой отсчет времени и вы сможете продолжить
игру.

По истечению времени появится всплывающее окно в котором будет 
отображен результат, поле ввода имени пользователя и кнопка 
"Save". Необходимо ввести имя пользователя (имя должно 
содержать как минимум 2 символа) и кликнуть на клавишу "Save".
После чего имя пользователя и его результат отобразиться 
в поле "Result" в порядке возрастания (от максимального 
результат к меньшему).

------------------------------------------------------------

При загрузке страницы берутся данные из хранилища по заданному
ключу и выводятся результаты в поле вывода "Result" в 
отсортированном порядке, по мере убывания. При завершении 
игры данный с поля ввода проходят проверку на валидность 
(не меньше 2-х символов и не больше 12-ти), если данные не 
проходят проверку, пользователю выводится сообщение под 
полем ввода с просьбой ввести корректные данные.
При клике на клавишу "Save" данные добавляются в локальное
хранилище и поле результатов обновляются.

Появление кубиков, их позиция на поле и количество
реализовано методом "Math.random". Данные для расположения
кубиков рассчитывается с учетом ширины поля, 
методом "offsetWidth" - для избежания выхода кубика за пределы
поля вывода.

Клик на кубик срабатывает только в момент игры (кнопка "Start"
сменилась на кнопку "Pause" и идет обратный отсчет времени).
Реализованно методом добавление/убиранием аттрибута "disabled"
и проверкой на его наличие.
