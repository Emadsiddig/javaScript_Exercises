function wordCount(s) {
  const stopWords = new Set(["a", "the", "on", "at", "of", "upon", "in", "as"]);
  
  const words = s.toLowerCase().match(/[a-z]+/g) || [];
  //console.log(words);

  return words.filter(word => !stopWords.has(word)).length;
}
wordCount("omda ahemd fw4lf fak-2d");