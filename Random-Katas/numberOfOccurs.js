Object.defineProperty(Array.prototype, 'numberOfOccurrences',{ 
  value : function numberOfOccurrences(element) {
    let arrLength = this.length;
    let count =0;
    for(let i = 0 ;i < arrLength ;i++){
      if(this[i] == element){
        count++;
      }
    }
   console.log(count);
  }
});
[39,3,3,45].numberOfOccurrences(3);