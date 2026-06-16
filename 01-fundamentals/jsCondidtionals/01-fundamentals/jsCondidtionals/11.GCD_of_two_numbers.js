// Approche One :
var gcdnum;

var a=223,b=23;
while (a!==b){
    if(a>b){
        a=a-b;
    }else if(b>a){
        b=b-a;
    }
}

gcdnum = a;
console.log(gcdnum)



// Approche two
function gcd(num1,num2){
    while(num2 !== 0){
        let reminder = num1%num2;
        num1=num2;
        num2=reminder;
    }
    return num1;
}

console.log(gcd(48,18)); 
console.log(gcd(232,23));