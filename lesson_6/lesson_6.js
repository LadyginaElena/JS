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



function twoOldestAges(ages) {
    let age = []
    ages.sort((a, b) => a - b)

    age[0] = ages.at(-2)
    age[1] = ages.at(-1)
    return age
}

let ages = [1, 5, 87, 45, 8, 8]

console.log(twoOldestAges(ages))


function stringy(size) {
    let newArr = []
    do {
        newArr.push("1")
        size = --size
        if (size > 0) {
            newArr.push("0")
            size = --size
        }
    }
    while (size > 0)
    return newArr.join("")
}

size = 10

console.log(stringy(size))

// Задача на работу с объектом
let logs = [{action: "A" , userID : 1}, {action: "A" , userID : 2},{action: "В" , userID : 3}, {action: "B" , userID : 1}, {action: "C" , userID : 1}]
function stringABC(logs) 
let abc={}
for (let i=0; i<logs.length; i++){
    let key = logs[i].userID
    if (key in abc){
        abc[key]+=logs[i].action
    }else {
        abc[key] = logs[i].action

    }
} 
for (let user in abc){
     if (abc[user].includes("ABC")){
        return (`User ID = ${user}`)
     }
}
console.log (stringABC(logs))