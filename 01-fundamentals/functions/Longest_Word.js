
function longestWorld(str){
  var wordArray = str.split(' ');
  var longer = wordArray[0];
  for(let i =0;i<wordArray.length;i++){
     if(wordArray[i].length > longer.length){
        longer=wordArray[i];
     }
  }
  console.log(longer);
}
longestWorld('emad siddig ahmedoy');
