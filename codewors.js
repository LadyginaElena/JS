function countLanguages(list) {
    let answer = new Object
    for (let x of list) {
        let language = x.language
        if (answer[language]) {
            answer[language]++
        } else {
            answer[language] = 1
        }
    } return answer
}


let list = [
    { firstName: 'Noah', lastName: 'M.', country: 'Switzerland', continent: 'Europe', age: 19, language: 'C' },
    { firstName: 'Anna', lastName: 'R.', country: 'Liechtenstein', continent: 'Europe', age: 52, language: 'JavaScript' },
    { firstName: 'Ramon', lastName: 'R.', country: 'Paraguay', continent: 'Americas', age: 29, language: 'Ruby' },
    { firstName: 'George', lastName: 'B.', country: 'England', continent: 'Europe', age: 81, language: 'C' },
];


console.log(countLanguages(list))
