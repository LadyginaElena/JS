//1.1 ННапишите программу калькулятора со switch, обработайте возможные ошибки ввода.
let a = 5;
let b = 3;
let operator = "a";

switch (operator) {
    case "+":
        console.log(`a+b = ${Number(a) + Number(b)}`);
        break;
    case "-":
        console.log(`a-b = ${Number(a) - Number(b)}`);
        break;
    case "*":
        console.log(`a*b = ${Number(a) * Number(b)}`);
        break;
    case "/":
        if (b == 0) {
            console.log(`Can't divide by zero`);
        } else {
            console.log(`a/b = ${Number(a) / Number(b)}`);
        }
        break;
    default:
        console.log("Operator not defined");
}


// 1.3 При помощи цикла for выведите чётные числа от 2 до 10

for (let i = 2; i <= 10; i++) {
    if (i/2 == 0) {
    console.log (i)
    }
}
