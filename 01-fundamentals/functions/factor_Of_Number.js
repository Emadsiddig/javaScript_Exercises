function factorOF(num){
  let arrOfFac = [];
  for(let i=1;i<num;i++){ 
        if(num % i == 0){ //this is the first number
            let j =num/i; // the second number 
            arrOfFac.push(`(${i}, ${j})`);

        }
  }
  console.log(arrOfFac);
}

factorOF(12);