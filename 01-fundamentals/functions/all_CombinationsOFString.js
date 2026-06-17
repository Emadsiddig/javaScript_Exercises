function allCombinationsOfString(string){
   var str = string.split("");
   console.log(str);


  var combi = [];
  var temp = "";
  var totalNumberOfSlices = Math.pow(2, str.length);

  for(var i =0 ; i < totalNumberOfSlices; i++){
    temp ="";
    for(var j= 0 ; j < str.length ; j++){

     if(i & Math.pow(2, j)){
        temp +=str[j];
     }
    }
    if(temp !== ""){
        combi.push(temp);
    }
  }
  console.log(combi.join("\n"));
}

allCombinationsOfString('dog');