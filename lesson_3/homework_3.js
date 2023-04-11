//1.1 ННапишите программу калькулятора со switch, обработайте возможные ошибки ввода.
let a = 5;
let b = 3;
let operator = "+";

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
    if (i % 2 === 0) {
        console.log(i)
    }
}

//Задача с интервью
//У вас есть массив со скобками, предположим 
//[ ‘(‘, ‘)’, ‘(‘, ‘)’, ‘)’] . Количество элементов и последовательность может быть разной.
//Нужно выяснить, у каждой ли скобки есть соответствующая пара (открывающая и закрывающая).

let arr = ["(", ")", "(", ")", ")"]
let countOpen = 0
let countClosed = 0

for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "(") {
        countOpen++
    }
    else if (arr[i] == ")") {
        countClosed++
    }
}
console.log(countOpen)
console.log(countClosed)
if (countOpen == countClosed) { console.log("Complit!!!") }
else { console.log("Not complete") }

//Креативное задание*(не показываем решение до понедельника):
//Имеется зашифрованное предложение 
//“Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr”

let str = "Ybrobrubr brabrrbrebr brtbrhbrebr brbbrebrsbrtbr brQbrAbr brebrvbrebrrbr"
let text = ""

for (let i = 0; i < str.length; i = i + 3) {
    text = text + str[i]
}
console.log(text)
//мы знаем, что оно означает “You are the best QA ever”.
//Нам нужно придумать программу дешифратор.



// Придумайте свой собственный шифр, а также программу, которая будет шифровать и затем дешифровщик к нему.
let strNew = ""
let textNew = "Love is looking outward together in the same direction"
let secret = "bla"

for (let i = 0; i < textNew.length; i++) {
    strNew = strNew + textNew[i] + secret
}
console.log(strNew)

let text_2 = ""
let c = secret.length
for (let i = 0; i < strNew.length; i=i+c+1) {
    text_2 = text_2 + strNew[i]
}
console.log(text_2)


//Нарисовать елочку и ромб  с помощью циклов 
//let hight = 5
//let widght = 10
//a = "*"
//for (let i = 0; i < hight; i++) {
    //for (let j = 0; j < widght; j = j + 2) {
        //console.log(a)
    //}
//}
