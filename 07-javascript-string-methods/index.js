// 1. A string is a palindrome if it is read the same from forward or backward. For example, dad reads the same either from forward or backward. So the word dad is a palindrome. Similarly, madam is also a palindrome. Write a JavaScript function to determine whether a given string is a palindrome.

const string1 = prompt('Enter a text: ');

function checkPalindrome(string1) {
    const len = string1.length;
    for (let i = 0; i < len / 2; i++) {
        if (string1[i] !== string1[len - 1 - i]) {
            return string1 + ' is not a palindrome';
        }
    }
    return text + " is a palindrome";
}

const value = checkPalindrome(text);

alert(value);


//2. Write a function to check whether two given strings are anagram of each other or not. An anagram of a string is another string that contains the same characters, only the order of characters can be different. For example, “abcd” and “dabc” are an anagram of each other.
const str1 = prompt('Enter first text: ');
const str2 = prompt('Enter second text: ');

function isAnagram(str1, str2) {
    const sortedStr1 = str1.split('').sort().join('');
    const sortedStr2 = str2.split('').sort().join('');
    return sortedStr1 === sortedStr2;
}

alert(isAnagram(str1, str2));

// 3. Write a JavaScript function to check whether a string is blank or not.

const input = prompt('Enter a text: ');

function is_Blank(input) {
    if (input.length === 0) {
        return "This string is blank";
    }else {
        return "This string is not blank";
    } 
  }
  alert(is_Blank(input));

// 4. Write a JavaScript function that hides email addresses to prevent unauthorized access.

const user_email = prompt('Enter your email: ');

function protectEmail(user_email){

    let avg, splitted, part1, part2;
    splitted = user_email.split("@");
    part1 = splitted[0];
    avg = part1.length / 2;
    part1 = part1.substring(0, (part1.length - avg));
    part2 = splitted[1];

    return part1 + "...@" + part2;
};

alert(protectEmail(user_email));


// 5. Write a JavaScript function to reverse words in a given string.

const text = prompt('Enter a text: ');

function reverseText(text) {

    if (text.length === 0) {
     return alert("Input should not be empty!");
    }
    let words = [];
    words = text.match(/\S+/g);
    let reverse_word = "";
    for (var i = 0; i < words.length; i++) {
        reverse_word += words[i].split('').reverse().join('') + " ";
    }
    return reverse_word
}
 console.log(alert("The reverse of the text is " + reverseText(text)))