function matrix (m){
   for(let i =0;i<m;i++){
     let row = '';
    for(let j=0;j<m;j++){
       
        if(i == j){
            row+=1;
        }
        else {
            row+=0;
        }
    }
    console.log(row);
   }
}
matrix(4);