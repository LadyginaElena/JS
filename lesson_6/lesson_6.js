//Задания на закрепление (можно и нужно обсуждать в группе):
//1. Задача про Палиндром. 
//Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
//Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

let str = "Anna"

let palindronFunction = a => a.toLowerCase === a.toLowerCase().split("").reverse().join("")

console.log(palindronFunction(str))

//2. Если вы решали задачку со скобками без методов, то сейчас решите с методами.
