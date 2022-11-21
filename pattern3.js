
//  ******
//  *****
//  ****
//  ***
//  **
//  *

let n = 6;
let str = '';

for(let i=1; i<=n; i++) {

    for(let j=1; j<=n-i+1; j++){

        str+='*';

    }
    str+='\n';
}

console.log(str);