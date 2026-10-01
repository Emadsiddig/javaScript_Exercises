function longestConsec(strarr, k) {
  const arrLength = strarr.length;
  if (arrLength === 0 || k > arrLength || k <= 0) return '';

  let longest = '';
  for (let i = 0; i <= arrLength - k; i++) {
    const consecutiveWords = strarr.slice(i, i + k).join('');
    if (consecutiveWords.length > longest.length) {
      longest = consecutiveWords;
    }
  }
  console.log(longest.length);
  return longest;
}


longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"],2);