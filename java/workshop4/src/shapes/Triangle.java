package shapes;

import java.text.DecimalFormat;

/** This class creates a shape of type Triangle */
public class Triangle implements Shape {
	
	/** The three sides of the triangle */
	private double sideOne, sideTwo, sideThree;
	
	/** 
	 *  Default constructor
	 *  Take no arguments and sets the
	 *  three sides to an empty state
	 * */
	public Triangle() {
		this.sideOne = 0.0;
		this.sideTwo = 0.0;
		this.sideThree = 0.0;
	}
	
	/**
	 * Three argument constructor
	 * @param sideOne A double representing the first side of the triangle
	 * @param sideTwo A double representing the second side of the triangle
	 * @param sideThree A double representing the third side of the triangle
	 * @throws CircleException Throws an exception if any side is invalid
	 * */
	public Triangle(final double sideOne, final double sideTwo, final double sideThree) throws TriangleException {
		if (sideOne > (sideTwo + sideThree) || 
			sideTwo > (sideOne + sideThree) || 
			sideThree > (sideOne + sideTwo) ||
			sideOne < 0 || sideTwo < 0 || sideThree < 0) {
			throw new TriangleException("Invalid side(s)!");	
		}
		
		this.sideOne = sideOne;
		this.sideTwo = sideTwo;
		this.sideThree = sideThree;
	}
	
	/**
	 * Sets the first side of the triangle
	 * @param double A double representing the new first side of the triangle
	 * @throws TriangleException Throws an exception if the first side is invalid
	 * */
	public void setSideOne(final double sideOne) throws TriangleException {
		if (sideOne > (sideTwo + sideThree) || sideOne < 0) throw new TriangleException("Side one is invalid");
		this.sideOne = sideOne;
	}
	
	/**
	 * Sets the second side of the triangle
	 * @param double A double representing the new second side of the triangle
	 * @throws TriangleException Throws an exception if the second side is invalid
	 * */	
	public void setSideTwo(final double sideTwo) throws TriangleException {
		if (sideTwo > (sideOne + sideThree) || sideTwo < 0) throw new TriangleException("Side two is invalid");
		this.sideTwo = sideTwo;
	}
	
	/**
	 * Sets the third side of the triangle
	 * @param double A double representing the new third side of the triangle
	 * @throws TriangleException Throws an exception if the third side is invalid
	 * */
	public void setSideThree(final double sideThree) throws TriangleException {
		if (sideThree > (sideOne + sideTwo) || sideThree < 0) throw new TriangleException("Side three is invalid");
		this.sideThree = sideThree;
	}
	
	/**
	 * Get the first side of the triangle
	 * @return double Returns the first side of the triangle
	 * */
	public double getSideOne() {
		return this.sideOne;
	}
	
	/**
	 * Get the second side of the triangle
	 * @return double Returns the second side of the triangle
	 * */
	public double getSideTwo() {
		return this.sideTwo;
	}
	
	/**
	 * Get the third side of the triangle
	 * @return double Returns the third side of the triangle
	 * */
	public double getSideThree() {
		return this.sideThree;
	}
	
	/**
	 * Calculate the perimeter of the triangle
	 * @return double Returns the perimeter of the triangle
	 * */
	@Override
	public double calcPerimeter() {
		return sideOne + sideTwo + sideThree;
	}
	
	/**
	 * Return a string representing the triangle
	 * @return string This returns a string representing the triangle 
	 * */
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {s1=" + getSideOne() + ", s2=" + getSideTwo() + ", s3=" + getSideThree() +
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimeter());
	}
}
