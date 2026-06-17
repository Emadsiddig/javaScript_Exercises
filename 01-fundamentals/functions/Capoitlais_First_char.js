
function Capitalize_First_Char(str){
  let word = str.split(" ");
  for(let i= 0;i<word.length;i++){
    word[i]=word[i].charAt(0).toUpperCase() + word[i].slice(1);
  }
  console.log(word);
}
Capitalize_First_Char('emad siddig');
