// 1. Задать температуру в градусах по Цельсию.
// Вывести в alert соответствующую температуру в градусах по Фаренгейту.
// Подсказка: расчёт идёт по формуле: Tf = (9 / 5) * Tc + 32, где Tf – температура по Фаренгейту, Tc – температура по Цельсию

let Tc = 50;
Tf = (9 / 5) * Tc + 32
alert(Tf)

// 2. Работа с переменными. Объявить две переменные: admin и name.
// Записать в name строку "Василий"; Скопировать значение из name в admin.
// Вывести admin (должно вывести «Василий»).

let admin;
let name = "Василий";
admin = name;
console.log(admin);

// 3. *Чему будет равно JS-выражение 1000 + "108"

1000108

// 4. *Самостоятельно разобраться с атрибутами тега script (async и defer)

// Async и defer полностью поддерживаются практически всеми браузенами 
// и их суть заключается в том, что скрипты с async выполняются сразу.



// <script async> 
// Не поддерживаются в IE9

// Не гарантируют порядок выполнения относительно других скриптов с async

// Выполняются без очереди

// Подгружаются без остановки HTML-парсера



// <script defer>
// Подгружаются без остановки HTML-парсера.

// Гарантируют порядок выполнения относительно других 
// defer-скриптов (если они внешние — с атрибутом src)



