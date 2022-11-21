//   *
//  ***
//  *****
// *******

let n = 4;
let str = '';

for(let i=1; i<= n; i++) {

    for(let space=1; space <= n-i; space++){
        str+=' ';
    }
    for(let j=1; j<=2*i-1; j++) {
        str+='*';
    }
    str+='\n';
}

console.log(str);