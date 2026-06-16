for(let i =1;i<10;i++){
    for(let j = 0;j<10;j++){
        for(let l = 0;l<10;l++){
            var pow = (i ** 3) + (j ** 3) + (l ** 3);

            var TheNumber = i*100 + j *10 + l;
           if(pow == TheNumber){
            console.log(TheNumber);
           }
        }
    }
}