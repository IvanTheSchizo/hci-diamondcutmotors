function validateField() {
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const confPass = document.getElementById("confPass").value
    const location = document.getElementById("location").value
    const age = document.getElementById("age").value
    const number = document.getElementById("number").value
    const male = document.getElementById("male")
    const female = document.getElementById("female")
    const agree = document.getElementById("agree")
    
    if(username.length<8 || username.length>20){
        alert("Username must be between 8-20 characters")
    }
    else if(!email.endsWith("@gmail.com")) {
        alert("Email must end with @gmail.com")
    }
    else if(checkAlphanumeric("password")) {
        alert("Password must be alphanumeric")
    }
    else if(confPass != password) {
        alert("Passwords must match")
    }
    else if(!male.checked && !female.checked) {
        alert("Gender must be selected")
    }
    else if(location == '') {
        alert("Location must be selected")
    }
    else if(age=='') {
        alert("Age must be entered")
    }
    else if(checkNumber(number)) {
        alert ("Invalid phone number")
    }
    else if(!agree.checked) {
        alert("You must agree to the terms and conditions")
    }
}
function checkAlphanumeric(password){
    var isAlpha = false
    var isNum = false

    for(let i=0; i<password.length; i++){
        if(isNaN(password[i])){
            isAlpha = true
        }
        else {
            isNum = true
        }
        if(isAlpha && isNum){
            return true
        }
    }
    return false
}
function checkNumber(number){
    var idxNum = (number+'').length
    for(let i=0; i<((number+'').length); i++){
        if(isNaN(number[i])){
            idxNum--
        }
        if(idxNum == (number+'').length){
            return true
        }
    return false
    }
}