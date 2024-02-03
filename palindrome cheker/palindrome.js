const enterPalindrome = document.getElementById('enter-string');
const resultPalindrome = document.getElementById('result-palindrome');
const textPalindrome = document.getElementById('ineerText');

 
let insideSstring = []

const cleanString=(solo)=>{
     let regexComa = /,/g;
     solo = solo.replace(regexComa, "");
     let regexSpace = /\s/g;
     solo = solo.replace(regexSpace, "");
     let regexPoint = /\./g;
     solo = solo.replace(regexPoint, "");
     let regexBackslash = /_/g;
     solo = solo.replace(regexBackslash, "");
     solo = solo.toLowerCase();
     return solo;
 };
 


resultPalindrome.addEventListener('click',()=>{
    let insideSstring = [];
    let palindString = cleanString(enterPalindrome.value);
    for(let y = 0; y < palindString.length; y++){
        insideSstring.unshift(palindString[y]);
    };
    let validation = insideSstring.join("");
    cleanString(validation);
    if (validation.match(palindString)){
        textPalindrome.innerText = `${palindString} is a palindrome`
    }else {
        textPalindrome.innerText = `${palindString} is not a palindrome`
    };
});
