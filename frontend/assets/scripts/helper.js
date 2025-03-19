
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

export {lengthCheck, stringCheck, isAlphaSpace};