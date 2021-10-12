package shapes;

import java.text.DecimalFormat;

/** This class creates a shape of type Circle */
public class Circle implements Shape {
	
	/** The radius of the circle */
	private double radius;
	
	/** 
	 *  Default constructor
	 *  Take no arguments and sets the
	 *  radius to an empty state
	 * */
	public Circle() {
		this.radius = 0.0;
	}
	
	/**
	 * One argument constructor
	 * @param radius A double representing the radius of the circle
	 * @throws CircleException Throws an exception if the radius is negative
	 * */
	public Circle(final double radius) throws CircleException {
		if (radius < 0) throw new CircleException("Invalid radius!");
		this.radius = radius;
	}
	
	/**
	 * Set the radius of the circle
	 * @param radius A double representing the new radius of the circle
	 * @throws CircleException Throws an exception if the radius is a negative number
	 * */
	public void setRadius(final double radius) throws CircleException {
		if (radius < 0) throw new CircleException("Invalid radius!");
		this.radius = radius;
	}
	
	/**
	 * Get the radius of the circle
	 * @return double Returns the width of the circle
	 * */
	public double getRadius() {
		return this.radius;
	}
	
	/**
	 * Calculate the perimeter of the circle
	 * @return double Returns the perimeter of the circle
	 * */
	@Override
	public double calcPerimeter() {
		return 2 * Math.PI * radius;
	}
	
	/**
	 * Return a string representing the circle
	 * @return string This returns a string representing the circle 
	 * */
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {r=" + getRadius() + "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimeter());
	}
}
