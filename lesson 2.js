// Задание 1
var a = 1, b = 1, c, d;
c = ++a; alert(c);           // 2 // a=1, оператор ++ увеличивает значение на 1 //
d = b++; alert(d);           // 1 // Потому что сначала d примет зн-е входящее b(1), а затем b увеличится на 1 //
c = (2+ ++a); alert(c);      // 5 // 2+3 (3 это ++а(в нашем случае а это уже 2)) //
d = (2+ b++); alert(d);      // 4 // 2+2 (b = 2, передается в операцию и только после увеличивается на 1) //
alert(a);                    // 3 // Дважды применен оператор ++ к а=1, что означает 3 //
alert(b);                    // 3 // Такая же ситуация, дважды применен оператор ++ //

// Задание 2
var a = 2;
var x = 1 + (a *= 2); //1+(2x2)
// Ответ 5

// Задание 3 
let a = 5;
let b = -15;

if (a >= 0 & b >= 0) {
    console.log(a - b)
} else if (a < 0 & b < 0) {
    console.log(a * b)
} else if ((a < 0 & b >= 0) || (a >= 0 & b < 0)) {
    console.log(a + b)
} 

// Задание 4
// Присвоить переменной а значение в промежутке [0..15]. 
// С помощью оператора switch организовать вывод чисел от a до 15.

let a = Math.floor(Math.random()*16);

switch (a) {
    case 1:
        console.log(a++);
    case 2:
        console.log(a++);
    case 3:
        console.log(a++);
    case 4:
        console.log(a++);
    case 5:
        console.log(a++);
    case 6:
        console.log(a++);
    case 7:
        console.log(a++);
    case 8:
        console.log(a++);
    case 9:
        console.log(a++);
    case 10:
        console.log(a++);
    case 11:
        console.log(a++);
    case 12:
        console.log(a++);
    case 13:
        console.log(a++);
    case 14:
        console.log(a++);
    case 15:
        console.log(a++);
}


// Задание 5
// Реализовать основные 4 арифметические операции в виде функций с двумя параметрами. 
// Обязательно использовать оператор return.

function sum(a, b) {
    return (a + b);
}

function dif(a, b) {
    return (a - b);
}

function mul(a, b) {
    return (a * b);
}

function divv(a, b) {
    return (a / b);
}


// Задание 6
// 6. Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation), 
// где arg1, arg2 – значения аргументов, operation – строка с названием операции. 
// В зависимости от переданного значения операции выполнить одну из арифметических операций (использовать функции из пункта 5) 
// и вернуть полученное значение (использовать switch).

function sum(a, b) {
    return (a + b);
}

function dif(a, b) {
    return (a - b);
}

function mul(a, b) {
    return (a * b);
}

function divv(a, b) {
    return (a / b);
}

function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case '+':
            return sum(arg1, arg2); 
        case '-':
            return dif(arg1, arg2);
        case '*':
            return mul(arg1, arg2);
        case '/':
            return divv(arg1, arg2);
    }
}

console.log(
    mathOperation(5, 9, '*')
    );
