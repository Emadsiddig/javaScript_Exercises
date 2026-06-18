function OccerrencesOfLetters(str){
    let small_str = str.toLowerCase();
    let numOfOcc = {};
    for(let char of small_str){
      numOfOcc[char] = (numOfOcc[char] || 0) + 1;
    }
    console.log(numOfOcc);
}
OccerrencesOfLetters('EASDDVSA');