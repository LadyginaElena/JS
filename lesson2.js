let login = true
let pass = false

if (login && pass){
    console.log("click submit")
}
else if (login != true && pass){
    console.log("your login is wrong")
}
else if (pass != true && login){
    console.log ("your password is wrong")
}
else{
    console.log ("please contact support")
}