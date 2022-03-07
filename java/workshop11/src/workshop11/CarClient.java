package workshop11;

import java.net.MalformedURLException;
import java.rmi.Naming;
import java.rmi.NotBoundException;
import java.rmi.RemoteException;

/** An object that represents the Car client */
public class CarClient {
	
	public static void main(String[] args) {
		try {
			/** Create a new car */
			System.out.println("New car created");
			System.out.println("---------------");
			Car car = new Car("Mercedes-Benz", "C-Class", "Black", 1029);
			System.out.println(car.toString());

			/** Register the car to the server */
			System.out.println("\nRequesting new plate...");
			CarInterface obj = (CarInterface) Naming.lookup("rmi://localhost:3000/createPlate");
			car.setPlate(obj.registerCar(car));
			System.out.println("New plate returned: " + car.getPlate());
			
			/** Print registered car */
			System.out.println("\nNew car registered");
			System.out.println("------------------");
			System.out.println(car.toString());
		} catch (MalformedURLException e) {
			System.out.println(e.getMessage());
		} catch (RemoteException e) {
			System.out.println(e.getMessage());
		} catch (NotBoundException e) {
			System.out.println(e.getMessage());
		}
	}
}
