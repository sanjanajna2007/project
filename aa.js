function BankAccount(accountNumber, accountHolderName, Balance, ) {
    let _accountNumber = accountNumber;
    let _accountHolderName = accountHolderName;
    let _Balance =  Balance;
    function showAccountDetails() {
        console.log('AccountNumber: ${_accountNumber}');
        console.log('Account Holder Name: ${_account HolderName}');
        console.log('Balance: ${_balance}');
    }
    function deposit(amount) {
        _balance += amount;
        shoeAccountDetails()
    }

    function withdraw(amount) {
        if(_balance >= amount) {
           _balance -= amount;
             showAccountDetails(); 
        } else {
            console.log("insuffecient Balance");
        }
            
           

    
    }
    return {
        deposit: deposit,
        withdraw: withdraw
    };

}

let myBankAccount = BankAccount ("2341235", "sanzzz", 1000);

myBankAccount.deposit(500);
myBankAccount.withdraw(2200);