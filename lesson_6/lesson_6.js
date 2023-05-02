//Задания на закрепление (можно и нужно обсуждать в группе):
//1. Задача про Палиндром. 
//Палиндром — слово, предложение или последовательность символов, которая абсолютно одинаково читается как в привычном направлении, так и в обратном. К примеру, “Anna” — это палиндром, а “table” и “John” — нет.
//Дана строка; нужно написать функцию, которая позволяет вернуть значение true, если строка является палиндромом, и false — если нет. При этом нужно учитывать пробелы и знаки препинания.

let str = "Anna"

let palindronFunction = a => a.toLowerCase() === a.toLowerCase().split("").reverse().join("")

console.log(palindronFunction(str))

//2. Если вы решали задачку со скобками без методов, то сейчас решите с методами.

//3.Напишите функцию filterLucky/ filter_lucky(), которая принимает список целых чисел и фильтрует список, чтобы включить только элементы, содержащие цифру 7.
var filterLucky = x => {
    let arr = []
    for (el of x) {
        arr.push(String(el))
    }
    let newArr = []
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            if (arr[i][j] == 7) {
                newArr.push(+arr[i])
            }
        }
    } return newArr
}

x = [1, 2, 3, 4, 5, 6, 7, 68, 69, 70, 15, 17]
console.log(filterLucky(x))


function removeRotten(bagOfFruits) {
    return bagOfFruits.toString().toLowerCase().replace(/rotten/g, '').split(",")
}

let bagOfFruits = ["apple", "rottenBanana", "kiwi", "melone", "orange"]

console.log(removeRotten(bagOfFruits))



function twoOldestAges(ages){
    let age = []
    ages.sort((a,b) => a - b)

    age[0] = ages.at(-2)
    age[1] =ages.at(-1)
    return age
}

let ages = [1,5,87,45,8,8]

console.log(twoOldestAges(ages))