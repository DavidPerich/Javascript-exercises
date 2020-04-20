// 1)

function makeBank() {
  var accounts = [];

  function makeAccount(number) {
    var balance = 0;
    var transactions = [];

    return {
      deposit: function(amount) {
        transactions.push({type: "deposit", amount: amount});
        balance += amount;
        return amount;
      },

      withdraw: function(amount) {
        if (amount > balance) {
          amount = balance;
        }

        transactions.push({type: "withdraw", amount: amount});
        balance -= amount;
        return amount;
      },

      balance: function() {
        return balance;
      },

      number: function() {
        return number;
      },

      transactions: function() {
        return transactions;
      },
    };
  }

  return {

    openAccount: function() {
      var number = accounts.length + 101;
      var account = makeAccount(number);
      accounts.push(account);
      return account;
    },

    transfer: function(source, destination, amount) {
      return destination.deposit(source.withdraw(amount));
    },
  };
}

var bank = makeBank();
var account = bank.openAccount();
console.log(account.balance());
// 0
console.log(account.deposit(17));
// 17
var secondAccount = bank.openAccount();
console.log(secondAccount.number());
// 102
console.log(account.transactions());
// [Object]

console.log(bank.accounts)