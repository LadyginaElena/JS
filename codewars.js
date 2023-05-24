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

function createDict(keys, values){
  let dict = {}
  for (let i=0; i< keys.length; i++){
    if (i < values.length){
      dict[keys[i]] = values[i]
    }
    else{
      dict[keys[i]] = null
    }
  } return dict
}
keys = ['a', 'b', 'c', 'd']
values = [1, 2, 3]
console.log(createDict(keys, values))


//Write a function that removes the spaces from the string, then return the resultant string.

function noSpace(x){
  return x.split(" ").join("")
}

let x='8 j 8   mBliB8g  imjB8B8  jl  B'

console.log(noSpace(x))

//Given a set of numbers, return the additive inverse of each. Each positive becomes negatives, and the negatives become positives.

function invert(array) {
  return array.length!=0 ? array.map(el => -el): array
}
 let array = [1,2,3,4,5]

 console.log(invert(array))

 //Given a non-empty array of integers, return the result of multiplying the values together in order.

 function grow(x){
  return x.reduce((a,b)=> a*b)
}

x = [1, 2, 3]
console.log(grow(x))
//Who remembers back to their time in the schoolyard, when girls would take a flower and tear its petals, saying each of the following phrases each time a petal was torn:


//function howMuchILoveYou(nbPetals) {
  //let petal = nbPetals%6
  //switch(petal){
     // case 1:
      //return "I love you"
      //break;
      
      //case 2:
     // return "a little"
     // break;
      //case 3:
      //return "a lot"
      //break;
      //case 4:
      //return "passionately"
      //break;
      //case 5:
      //return "madly"
      //break;
      //case 0:
      //return "not at all"
      //break;
 // }
//}


//nbPetals = 198

//console.log (howMuchILoveYou(nbPetals))


//Training JS #32: methods of Math---round() ceil() and floor()
function roundIt(n){
  let newArr = n.toString().split(".")
  let left = newArr.shift().length
  let right = newArr.pop().length
  console.log(left)
  console.log(right)
  if (left*1<right*1){
    return Math.ceil(n)
  }
  else if (left*1>right*1){return Math.floor(n)}
  else{
    return Math.round(n)
  }
}


console.log(roundIt(3.45))
console.log(roundIt(34.5))
console.log(roundIt(34.45))

//Going to the cinema
function movie(card, ticket, perc) {
  let count = 0
  let sisA = 0
  let sisB = card
  let newTicket = ticket
  while (Math.ceil(sisB)>=Math.ceil(sisA)){
       sisA+=ticket
       newTicket = newTicket*perc
       sisB +=newTicket
       count++
  }
  return count
}
console.log (movie(100, 10, 0.95))

//Create a function that takes any sentence and redistributes the spaces (and adds additional spaces if needed) so that each word starts with a vowel

function vowelStart(str){
  let repStr = str.replaceAll(/\W+/g,"").toLowerCase()
  repStr = repStr.replaceAll(/_/g,"")
  console.log(repStr)
  let newStr=""
  let abc = "aieou"
  for (let x of repStr){
    if (abc.includes(x) ){
      newStr+=" "+x
    }
    else {
      newStr+=x
    }
  }
  return newStr.trimStart()
  }

 let str = 'It is beautiful weather today!'
 console.log (vowelStart(str))

 //Using n as a parameter in the function pattern, where n>0, complete the codes to get the pattern
 function pattern(n){
  var output="1\n";
  for (let i=1; i<n; i++){
    output+=1+"*".repeat(i)+`${i+1}\n`
  }
  let newStr = output.slice(0,-1)
  return newStr
 }
  n=3
  console.log(pattern(n))


  //Write a function that can return the smallest value of an array or the index of that value. The function's 2nd parameter will tell whether it should return the value or the index.
  function min(arr, toReturn) {
    let min = Math.min(...arr)
    if (toReturn =="value"){
      return min
    }
    else {
      return arr.indexOf(min)
    }
  }

  let arr = [1,2,3,4,5]
  let toReturn = "value"
  console.log(min(arr, toReturn))