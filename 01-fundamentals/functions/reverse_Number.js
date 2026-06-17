function reverse_Number(num){
  let rev = String(num);
    rev=rev.split("");
   rev= rev.reverse();
    rev = rev.join("");
    return rev;
}

console.log(reverse_Number(4322));