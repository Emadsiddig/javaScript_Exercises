function transposeTwoStrings(array) {
  let str1 = array[0];
  let str2 = array[1];
  
  let maxLength = Math.max(str1.length, str2.length);
  
  let result = "";

  for (let i = 0; i < maxLength; i++) {
    let char1 = str1[i] || ' ';
    let char2 = str2[i] || ' ';
    
    result += char1 + " " + char2;
    
    if (i < maxLength - 1) {
      result += "\n";
    }
  }

  return result;
}