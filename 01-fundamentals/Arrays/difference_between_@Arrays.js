function Diffrence_Between(arr1,arr2){
 
    const cache = {};

    arr2.forEach(item => cache[item] = true);

    return arr1.filter(item =>{

        const seen = cache[item] || false;
         cache[item] = true;

         return !seen;
    });
}

const array1 = [1, 2, 2, 3];
const array2 = [3, 4];

const result =Diffrence_Between(array1, array2);
console.log(result);