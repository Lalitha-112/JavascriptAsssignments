function reverseString(str) {
    let characters = str.split("");
    let reversedString = "";

    for (let i = characters.length - 1; i >= 0; i--) {
        reversedString = reversedString + characters[i];
    }

    console.log("Reversed String: " + reversedString);
    return reversedString;
}

function isPalindrome(str) {
    let reversed = reverseString(str);

    if (str === reversed) {
        return true;
    } else {
        return false;
    }
}

console.log("madam:", isPalindrome("madam"));
console.log("level:", isPalindrome("level"));
console.log("hello:", isPalindrome("hello"));
console.log("racecar:", isPalindrome("racecar"));
console.log("JavaScript:", isPalindrome("JavaScript"));