var num1=43,num2=33,num3=22;

if(num1 > num2 && num1 > num3){
   if(num2 > num3){
     console.log('sorted number is :' + num1 + ',' + num2 +',' + num3 );
   }else{
      console.log('sorted number is :' + num1 + ',' + num3+',' + num2 );

   }
}else if(num2 > num1 && num2 > num3){
     if(num1 > num3){
             console.log('sorted number is :' + num2 + ',' + num1 + ',' + num3 );
     }else{
             console.log('sorted number is :' + num2 + ',' + num3+',' + num1 );

     }

}else if(num3 > num1 && num3 > num2){
   if(num1 > num2){
         console.log('sorted number is :' + num3 + ',' + num1+',' + num2 );
   }else {
         console.log('sorted number is :' + num3 + ',' + num2+',' + num1 );

   }
}