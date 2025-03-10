
//check the length of the string
function lengthCheck(inputString){
    return inputString.lenth > 8;
}
//check if the two strings are the same
function stringCheck(firstString,secondString){
    return firstString === secondString;
}

//check if a string only contains alphabets and spaces
function isAlphaSpace(inputString){
    return /^[A-Za-z\s]+$/.test(inputString);
}

function isValidInputs(username,email,password){
    if(!isAlphaSpace(username)){
        username.style.outline = "1px solid red";
        return;
    }

    if(!lengthCheck(password)){
        password.style.outline = "1px solid red";
        return;
    }

    if(!stringCheck(password,confirmPassword)){
        confirmPassword.style.outline = "1px solid red";
        return;
    }

}

export {lengthCheck, stringCheck, isAlphaSpace};