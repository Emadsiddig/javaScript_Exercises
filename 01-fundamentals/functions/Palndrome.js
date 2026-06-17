function Palindrome(str){
   let rev =str.split("").reverse();
   let str1 = str.split("");
   for(let i =0;i<rev.length;i++){
        if(rev[i] !== str1[i]){
            return 'Not Palindrome';
        }
   }
   return 'Palindrome';
   console.log(rev);
   console.log(str1);
}

console.log(Palindrome("emad"));
console.log(Palindrome("madam"));