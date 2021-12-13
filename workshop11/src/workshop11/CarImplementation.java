package workshop11;

import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;

/** This class implements the generation function */
public class CarImplementation extends UnicastRemoteObject implements CarInterface {
	
	/** Default constructor */
	public CarImplementation() throws RemoteException {
		super();
	}
	
	/**
	 * Generates the new plate
	 * @return String Returns a String representing the new registered plate.
	 */
	@Override
	public int registerCar(Car car) throws RemoteException {
		return car.hashCode();
	}
}