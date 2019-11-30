function palindrome(str) {
    // Good luck!
    var str = str;
    str = str.toLowerCase();    //Case conversion
    console.log(str);
    str = str.trim();   //Whitespace remove
    str = str.replace(/[^0-9a-z]/gi, '');   //Alphanumeric remove
    console.log(str);

    //Palindrome check
    var len = str.length-1;
    for(let i=0; i<str.length; i++) {
        if (str[i] != str[len--])
            return false
    }
    return true;
}

palindrome("0_0 (: /-\\ :) 0-0");
