const originalTransations = [
  { transactionId: 't100', type: 'debit', amount: 107.15, description: 'Amazon Purchase', date: '09/01/2020' },
  { transactionId: 't101', type: 'debit', amount: 15.05, description: 'QuikTrip', date: '09/01/2020' },
  { transactionId: 't102', type: 'debit', amount: 9.67, description: 'Chipotle', date: '09/02/2020' },
  { transactionId: 't103', type: 'debit', amount: 350, description: 'A1 Air Conditioning', date: '09/03/2020' },
  { transactionId: 't104', type: 'debit', amount: 12.30, description: 'Chick Fil A', date: '09/03/2020' },
  { transactionId: 't105', type: 'credit', amount: 500, description: 'Deposit', date: '09/05/2020' },
  { transactionId: 't106', type: 'debit', amount: 25, description: 'DPS Service Fee', date: '09/06/2020' },
  { transactionId: 't107', type: 'debit', amount: 212.31, description: 'Sprouts', date: '09/06/2020' },
  { transactionId: 't107', type: 'credit', amount: 20.90, description: 'Sprouts', date: '09/06/2020' },
  { transactionId: 't108', type: 'debit', amount: 11.50, description: 'Half Price Books', date: '09/07/2020' }
];

// amount less then or equle to 20
let less_Than_20_transactions =[];
for(i=0;i<originalTransations.length;i++){
    if(originalTransations[i].amount <= 20){
      less_Than_20_transactions.push(originalTransations[i]);
    }
        
}
console.log('\nThe transactions With Amount Less Than 20  \n')
console.log(less_Than_20_transactions);

// amount with the whole_dollars
let wholeDollarTransactions = [];

for (let i = 0; i < originalTransations.length; i++) {
  if (originalTransations[i].amount % 1 === 0) {
    wholeDollarTransactions.push(originalTransations[i]);
  }
}
console.log("\n The transactions with Whole Doller Amount  is :  \n" );
console.log(wholeDollarTransactions);

// Transactions occured in 9/3/2020
 let Transactions_Occured = [];
for (let j = 0; j < originalTransations.length; j++) {
    if (originalTransations[j].date === "09/03/2020") {
        Transactions_Occured.push(originalTransations[j]);
    }
}
console.log('\nThe trensaction Occured In 09/03/2020 is :\n');
console.log(Transactions_Occured);








