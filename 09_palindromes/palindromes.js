const palindromes = function (str) {
    str = str.toLowerCase();
    if (str[str.length-1] === "." || str[str.length-1] === "!") {
        str = str.substring(0,str.length-1);
    }
    let newStr = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] !== " " && str[i] !== ",") {
            newStr += str[i];
        }
    }
    let reverse = "";
    for (i = newStr.length-1; i >= 0; i--) {
        reverse += newStr[i];
    }
    return reverse == newStr;

};

// Do not edit below this line
module.exports = palindromes;
