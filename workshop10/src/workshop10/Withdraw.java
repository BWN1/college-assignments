package workshop10;

/** This creates a Widthdraw thread */
public class Withdraw extends Thread {
	private Account account;
	private int[] widthdrawals;
	
	/**
	 * Two argument constructor
	 * @param sharedAccount An object of type Account
	 * @param deposit An integer array that represents the deposit
	 */
	public Withdraw(Account account, int[] widthdrawals) {
		this.account = account;
		this.widthdrawals = widthdrawals;
	}
	
	/** Start the thread and withdraw money from the shared account */
	@Override
	public void run() {
		synchronized(account) {
			
			/** Wait for each withdraw */
			for (int i = 0; i < widthdrawals.length; i++) {
				account.withdraw(widthdrawals[i]);
				
				try {
					Thread.sleep(1000);
				} catch (InterruptedException e) {
					System.out.println(e.getMessage());
				}
				
			}
		}
	}
}
