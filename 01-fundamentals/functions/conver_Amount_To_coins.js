function convAmountTOCoins(amount, coins){
    coins.sort((a, b) => b - a);
    let arrOfcoins = [];

    for(let i = 0; i < coins.length; i++){
        let currentCoin = coins[i]; // Grab the actual coin value 
        
        let fit = Math.floor(amount / currentCoin);
        
        for(let j = 0; j < fit; j++){
            arrOfcoins.push(currentCoin); // Use () and push the coin.
        }
        
        amount %= currentCoin; // Remainder of the actual coin
    }
    return arrOfcoins;
}

console.log(convAmountTOCoins(323, [23, 44, 2, 1]));
