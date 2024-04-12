class BankAccount {
    constructor(accountNumber, ownerName, balance) {
        this.accountNumber = accountNumber;
        this.ownerName = ownerName;
        this.balance = balance;
    }

    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited ${amount}. New balance: $${this.balance}`);
    }

    withdraw(amount) {
        if (amount <= this.balance) {
            this.balance -= amount;
            console.log(`Withdrawn ${amount}. New balance: $${this.balance}`);
        } else {
            console.log("Insufficient funds");
        }
    }

    getBalance() {
        console.log(`Balance: $${this.balance}`);
    }

    displayAccountInfo() {
        console.log(`Account Number: ${this.accountNumber}`);
        console.log(`Owner Name: ${this.ownerName}`);
        console.log(`Balance: $${this.balance}`);
    }
}

// Example usage
const account1 = new BankAccount(1001, "John Doe", 500);
const account2 = new BankAccount(1002, "Jane Smith", 1000);

account1.deposit(200);
account1.withdraw(50);
account1.displayAccountInfo();

account2.withdraw(1500);
account2.displayAccountInfo();
