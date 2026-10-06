

Object.defineProperty(
  String.prototype,
  'toJadenCase',
  { value :
   function toJadenCase() {
    return this.split(/\s+/).map(word =>word[0].toUpperCase() + word.slice(1)).join(' ');
   }
  }
);

console.log('most trees are blue'.toJadenCase());