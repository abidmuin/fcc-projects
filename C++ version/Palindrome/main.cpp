//https://www.freecodecamp.org/learn/javascript-algorithms-and-data-structures/javascript-algorithms-and-data-structures-projects/palindrome-checker
#include <iostream>
#include <bits/stdc++.h>
#include <string>
#include <string.h>
#include <cstring>
#include <ctype.h>
#include <cctype>
#include <algorithm>
using namespace std;

bool Palindrome(string);

int main()
{
    string str;
    getline(cin, str);
    Palindrome(str);

    return 0;
}

bool Palindrome(string str)
{
    //Printing original string
//    cout << endl;
//    cout << "Original= " << str << endl;
//    cout << "String length= " << str.length() << endl;
//    cout << endl;

    //To lower case conversion
    for(int i=0; i<str.length(); i++)
        str[i]=tolower(str[i]);
//    cout << "Case conversion= " << str << endl;
//    cout << "String length= " << str.length() << endl;
//    cout << endl;

    //Remove whitespace
    for(int k=0; k<str.length(); k++){
        if(str[k] == ' ')
            str.erase(k,1);
    }
//    cout << "Remove whitespace " << str << endl;
//    cout << "String length " << str.length() << endl;
//    cout << endl;

    //Remove alphanumeric
    for(int l=0; l<str.length(); l++){
        if(!isalnum(str[l]))
            str.erase(l,1);
    }
//    cout << "Remove alphanumeric= " << str << endl;
//    cout << "String length= " << str.length() << endl;
//    cout << endl;

    //Palindrome check
    int y=str.length()-1;
    for(int m=0; m<str.length(); m++){
        if(str[m]!=str[y--]){
            cout << "false" << endl;
            return 0;
        }
    }
    cout << "true" << endl;
}
