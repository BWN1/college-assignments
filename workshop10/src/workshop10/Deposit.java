package workshop10;

/** This creates a Deposit thread */
public class Deposit extends Thread {
	private Account account;
	private int[] deposits;
	private String[] currencies;
	
	/**
	 * Three argument constructor
	 * @param sharedAccount An object of type Account
	 * @param deposit Receives an integer array with the values that will be deposited
	 * @param currency Receives a string array with the currency that will be deposited
	 */
	public Deposit(Account account, int[] deposits, String[] currencies) {
		this.account = account;
		this.deposits = deposits;
		this.currencies = currencies;
	}
	
	/** Start the thread and deposit money into the shared account */
	@Override
	public void run() {
		synchronized(this.account) {
			
			/** Wait for each deposit */
			for (int i = 0; i < deposits.length; i++) {
				this.account.deposit(this.deposits[i], this.currencies[i]);
				
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					System.out.println(e.getMessage());
				}
			}
		}
	}
}
