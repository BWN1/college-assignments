package workshop11;

import java.rmi.registry.LocateRegistry;
import java.rmi.registry.Registry;

/** An object that represents the car registration server */
public class CarServer {
	
	/**
	 * Creates the car registration server, waits for requests from 
	 * clients and returns the new registered plate.
	 */
	public CarServer() {
		try {
			CarInterface obj = new CarImplementation();
			Registry registry = LocateRegistry.createRegistry(3000);
			registry.rebind("createPlate", obj);
			
		} catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	/** Start the server */
	public static void main(String[] args) {
		new CarServer();
		System.out.println("createPlate is running");
	}
}