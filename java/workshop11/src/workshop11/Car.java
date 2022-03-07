package workshop11;

import java.io.Serializable;

/** This creates a Car object */
public class Car implements Serializable {
	private String manufacturer;
	private String model;
	private String colour;
	private int mileage;
	private int plate;
	
	/**
	 * 3 arg constructor
	 * @param manufacturer A String representing the car's manufacturer
	 * @param model A string representing the car's model
	 * @param colour A string representing the car's colour
	 * @param mileage An int representing the car's mileage
	 */
	public Car(String manufacturer, String model, String colour, int mileage) {
		this.manufacturer = manufacturer;
		this.model = model;
		this.colour = colour;
		this.mileage = mileage;
		this.plate = 0;
	}
	
	/**
	 * Set the manufacturer of the car
	 * @param manufacturer A String representing the manufacturer of the car
	 * */
	public void setManufacturer(String manufacturer) {
		this.manufacturer = manufacturer;
	}
	
	/**
	 * Set the model of the car
	 * @param model A String representing the model of the car
	 * */
	public void setModel(String model) {
		this.model = model;
	}
	
	/**
	 * Set the colour of the car
	 * @param colour A String representing the colour of the car
	 * */
	public void setColor(String colour) {
		this.colour = colour;
	}
	
	/**
	 * Set the mileage of the car
	 * @param mileage An int representing the mileage of the car
	 * */
	public void setMileage(int mileage) {
		this.mileage = mileage;
	}
	
	/**
	 * Set the plate of the car
	 * @param plate An int representing the plate of the car
	 * */
	public void setPlate(int plate) {
		this.plate = plate;
	}
	
	/**
	 * Get the manufacturer of the car
	 * @return String Returns the car's manufacturer
	 * */
	public String getManufacturer() {
		return this.manufacturer;
	}
	
	/**
	 * Get the model of the car
	 * @return String Returns the car's model
	 * */
	public String getModel() {
		return this.model;
	}
	
	/**
	 * Get the colour of the car
	 * @return String Returns the car's colour
	 * */
	public String getColour() {
		return this.colour;
	}
	
	/**
	 * Get the mileage of the car
	 * @return int Returns the car's mileage
	 * */
	public int getMileage() {
		return this.mileage;
	}
	
	/**
	 * Get the plate of the car
	 * @return int Returns the car's plate
	 * */
	public int getPlate() {
		return this.plate;
	}
	
	/**
	 * Return a string representing the car
	 * @return A string representing the car
	 */
	@Override
	public String toString() {
		return "Manufacturer: " + this.manufacturer + "\nModel: " + this.model + 
				"\nColour: " + this.colour + "\nMileage: "+ this.mileage 
				+ "\nPlate: " + (this.plate == 0 ? "undefined" : this.plate);
	}

}