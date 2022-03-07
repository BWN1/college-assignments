package workshop10;

public class Main {

	public static void main(String[] args) {
		
		/** Transaction types */
		int[] amounts = {1, 1, 1, 1, 1, 1};
		String[] currencies = {"Dollar", "Euro", "Euro", "Pound", "Pound", "Pound"};
		
		/** Account and actions */
		Account account = new Account(0, "Euro");
		Thread deposits = new Deposit(account, amounts, currencies);
		Thread withdrawals = new Withdraw(account, amounts);
		
		/** Display initial account */
		System.out.println("Starting program");
		System.out.println("----------------");
		System.out.println("Account balance: " + account.getBalance());
		System.out.println("Account currency: " + account.getCurrency() + "\n");
		
		/** Start deposits and withdrawal threads */
		deposits.start();
		withdrawals.start();
		
		try {
			deposits.join();
			withdrawals.join();
		} catch (InterruptedException e) {
			System.out.println(e.getMessage());
		}
		
	}

}
