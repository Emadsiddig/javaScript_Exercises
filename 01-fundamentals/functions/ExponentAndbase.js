function Exponent_And_Base(base,exp){
    let res=1;
    for(let i = 0;i<exp;i++){
     res*=base;
    }
    return res;
}
    console.log(Exponent_And_Base(4,2));