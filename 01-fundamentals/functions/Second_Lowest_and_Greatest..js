function secLOwerAndGreater(arr){
    let lowest=arr[0] ,secLowest=arr[0],greater=arr[0];

    for(let i =1;i<arr.length;i++){
        if(arr[i] > greater){
            greater=arr[i];
        }
        if(arr[i] < lowest){
            secLowest = lowest;
            lowest = arr[i];
        }else if(arr[i] < secLowest){
         secLowest = arr[i];
     }
    }
    console.log('The second Lower Element is:' + secLowest + ' And the greater is :' + greater);
}

let array = [6,4,5,6,7,9];
secLOwerAndGreater(array);