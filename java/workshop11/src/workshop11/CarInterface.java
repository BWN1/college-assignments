package workshop11;

import java.rmi.Remote;
import java.rmi.RemoteException;

/** This creates an interface for car registration */
public interface CarInterface extends Remote {
	public int registerCar(Car car) throws RemoteException;
}