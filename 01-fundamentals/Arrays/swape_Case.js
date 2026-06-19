let lower  = 'abcdefghhgklmnopqrstuvwxyz';
let upper = lower.toUpperCase();
let str= "Omda";
let res = [];
for(let i=0;i< str.length;i++){
  if(upper.indexOf(str[i])!== -1){
    res.push(str[i].toLowerCase());
  }else  if(lower.indexOf[str[i]] !==-1){
    res.push(str[i].toUpperCase());
  }else{
    res.push(str[i]);
  }
}

console.log(res.join(''));