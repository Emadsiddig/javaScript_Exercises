function duplicateEncode(word){
    let count = {};
    let result = [];
  for(let chars of word){

    let char = chars.toLowerCase();
    count[char] = count[char] + 1 || 1;

  }
 for(let chars of word){
    let char = chars.toLowerCase();
    if(count[char] > 1){
      result.push(')');
    }else{
      result.push('(');
    }
  }

    return result.join('');
}
console.log(duplicateEncode("llslslsl"));
 