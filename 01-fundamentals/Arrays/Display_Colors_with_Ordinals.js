
function ordinal(n){
    let ordi = ["th","st","nd","rd"];
    let num = n % 100;

    return num + (ordi[(num -20) %10] || ordi[num] || ordi[0]);

}

const color = ["Blue ", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow "];

 for(let i =0 ;i<color.length;i++){
    let ord = i+1;
    let result = ordinal(ord) + ' Color is ' + color[i];
    console.log(result);
 }

