package workshop10;

/** This creates an Account object */
public class Account {
	private int balance;
	private String currency;
	
	/**
	 * Two argument constructor
	 * @param balance An integer that represents account balance
	 * @param currency A string that represents account currency
	 */
	Account(int balance, String currency) {
		this.balance = balance;
		this.currency = currency;
	}
	
	/**
	 * Set the balance of the account
	 * @param balance An int representing the balance of the account
	 * */
	public void setBalance(int balance) {
		this.balance = balance;
	}
	
	/**
	 * Set the currency the account uses
	 * @param currency A String representing the currency of the account
	 * */
	public void setCurrency(String currency) {
		this.currency = currency;
	}
	
	
	/**
	 * Get the balance of the account
	 * @return int Returns the account's balance
	 * */
	public int getBalance() {
		return this.balance;
	}
	
	/**
	 * Get the currency that the account is using
	 * @return String Returns the currency that the account is using
	 * */
	public String getCurrency() {
		return this.currency;
	}
	
	
	/** 
	 * Deposit a sum of money into the account
	 * @param depositAmount An int representing the amount to be deposited
	 * @param currency A String representing the currency of the amount being deposited 
	 * */
	public synchronized void deposit(int depositAmount, String currency) {
		
		/** 
		 * Check if the currency being deposited 
		 * is different to the currency of the account 
		 * */
		while (this.balance > 0 && !this.currency.equals(currency)) {
			try {
				System.out.println("You cannot deposit a different currency.\n");
				wait();
			} catch (InterruptedException e) {
				System.out.println(e.getMessage());
			}
		}
		
		/** Deposit the money */
		if (this.currency.equals(currency)) {
			setBalance(this.balance += depositAmount);
		} else {
			setBalance(depositAmount);
		}
		
		System.out.println("Deposited: " + depositAmount + " " + currency + "(s).");
		System.out.println("Balance: " + this.balance + " " + this.currency +  "(s).\n");
		notify();
	}
	
	/** 
	 * Withdraw a sum of money from the account
	 * @param amount An int representing the amount to be withdrawn
	 * */
	public synchronized void withdraw(int amount) {
		
		/** 
		 * Check if the amount to be widthdrawn 
		 * if more than the total in the account 
		 * */
		while (this.balance < amount) {
			try {
				System.out.println("You cannot withdraw, insuficient balance.\n");
				wait();
			} catch (InterruptedException e) {
				System.out.println(e.getMessage());
			}
		}
		
		/** Withdraw the money */
		setBalance(this.balance - amount);
		System.out.println("Withdraw: " + amount + " " + this.currency + "(s).");
		System.out.println("Balance: " + this.balance + " " + this.currency + "(s).\n");
		notify();
	}
}
