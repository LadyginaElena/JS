// let height, weight
// height = prompt ("Введите свой рост")
// weight = prompt ("Введите свой вес")
// alert(`Ваш BMI = ${weight/(height*height)}`)

let a = 3
let b = 2
let c

//variant1
c = a
a = b
b = c

console.log(a)
console.log(b)

//variant2
a = a + b
b = a - b
a = a - b
console.log(a)
console.log(b)

//variant3
a = a * b
b = a / b
a = a / b
console.log(a)
console.log(b)