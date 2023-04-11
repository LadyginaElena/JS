// 1.1 Напишите программу по согласованию отпуска в зависимости от месяца. Если месяц “July” или “August”, то программа должна показать - ‘approved’, если другие месяцы, то - “denied”.
let month = prompt("Enter the month of your vacation", "July");
if (month === "July" || month === "August") {
  alert("Your vacation approved");
} else {
  alert("Your vacation denied");
}

//1.2 Напишите простенький калькулятор (*, /, +, -). Проверьте ваш код на охват исключений для арифметических операций.
//У вас должны быть две переменные для исходных чисел и одна для оператора. В зависимости от оператора, должно происходить то или иное арифметическое действие и выводиться результат в консоль.
let a = prompt("Enter a number", "5");
let b = prompt("Enter a number", "7");
let operator = prompt("Enter operator", "+");
if (operator == "/" && b != 0) {
  document.write(`a/b = ${Number(a) / Number(b)}`, "<br>");
} else if (operator == "*") {
  document.write(`a*b = ${Number(a) * Number(b)}`, "<br>");
} else if (operator == "-") {
  document.write(`a-b = ${Number(a) - Number(b)}`, "<br>");
} else if (operator == "+") {
  document.write(`a+b = ${Number(a) + Number(b)}`, "<br>");
} else if (b == 0 && operator == "/") {
  document.write(`Can't divide by zero`, "<br>");
} else {
  document.write(`Operator not defined`, "<br>");
}

//1.3 Решите задачу с помощью пройденных тем:
//«Улитка ползёт вверх по стене высотой 5 метров. Каждый день она проползает вверх на 3 метра, а каждую ночь съезжает вниз на 2 метра. За сколько дней она доползёт до вершины стены.»
let day = 3;
let night = -2;
let S = 5;
let countDays = 0;
if (S > 0) {
    S = S - day;
    countDays=countDays+1;
    S = S + night;
    document.write(`Улитка ползет ${countDays} день`, "<br>");
}
if (S > 0) {
    S = S - day;
    countDays=countDays+1;
    S = S + night;
    document.write(`Улитка ползет еще ${countDays} день`, "<br>");
}
if (S > 0) {
    S = S - day;
    countDays=countDays+1;
    S = S + night;
    document.write(`Улитка ползет ${countDays} дней`, "<br>");
}
if (S <= 0) {
    S = S - day;
    document.write("Улитка достигла верха стены", "<br>");
    countDays=countDays++;
    S = S + night;
}


