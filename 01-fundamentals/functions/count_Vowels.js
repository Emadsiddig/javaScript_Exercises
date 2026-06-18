function CountVowel(str){
  let smalLetter = str.split('').map(str1 => str1.toLowerCase());
   let counter=0;
  for(let i=0;i<smalLetter.length;i++){
    if(smalLetter[i] == 'a' || smalLetter[i] == 'e' || smalLetter[i] == 'o' || smalLetter[i] == 'i'){
     counter++;
    }
  }
 console.log(counter);

}

CountVowel('weedsvacvdfa');