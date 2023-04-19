//Гипотеза Коллатца
//"https://habr.com/ru/articles/597935/"

function CollatzConjecture(number) {
    let count =0
    do { count++
        if (number%2 === 0){
            number = number/2
        }else {
            number = number*3+1
        }
    }
    while (number > 1)
    console.log(`Number of loop iterations = ${count}`)
    console.log(`The number received at the end of the cycle = ${number}`)
}

CollatzConjecture(321)

