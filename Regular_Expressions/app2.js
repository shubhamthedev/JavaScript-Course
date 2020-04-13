let re;
//Literal characters
re = /hello/;
re = /hello/i;
//Metacharacters
re = /^h/i; //Must start with a h
re = /d$/i; //Must end with a d 
re = /^hello$/i; //Must start and end with
re = /h.llo/i; //Matches any one character
re = /h*llo/i; //Matches any character 0 or more times
re = /gre?a?y/i;//Optional character
re = /gre?a?y\?/i;//Escape character

//Brackets [] - Character sets
re = /gr[ae]y/i;//Must be an e or an a
re = /[GF]ray/;//Must be a G or F
re = /[^GF]ray/i;//Match anything except G or F
re = /[A-Z]ray/i;//Match anything in the range A to Z

//Braces {} - Quantifiers
re = /Hel{2}o/i;//Must occur {m} no. of times
re = /Hel{2,4}o/i;//Must occur {m,n} at least m times

//Parenthesis () - Grouping
re = /^([0-9]x){3}$/;

//Shorthand character classes
re = /\w/; //Word character - alphanumeric or _
re = /\w+/; // + here indicates one or more characters
re = /\W/;//Non word characters
re = /\d/;//Match any digit
re = /\d+/;//Match any digit 0 or more times
re = /\D/;//Match any non digit
re = /\s/;//Match whitespace character
re = /\S/;//Match non whitespace character
re = /Hell\b/;//Word boundary i.e. when we match this it will only look for the word hell and not hell in hello

//Assertions
re = /x(?=y)/;//Match x if followed by y
re = /x(?!y)/;//Match x if not followed by y




const str = '3x3x3x';

const result = re.exec(str);
console.log(result);
function reTest(re, str) {
    if (re.test(str)) {
        console.log(`${str} matches ${re.source}`);
    } else {
        console.log(`${str} does not match ${re.source}`);
    }
}
reTest(re, str);