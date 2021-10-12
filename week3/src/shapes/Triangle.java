package shapes;

import java.text.DecimalFormat;

public class Triangle implements Shape {
	private double sideOne, sideTwo, sideThree;
	
	public Triangle() {
		this.sideOne = 0.0;
		this.sideTwo = 0.0;
		this.sideThree = 0.0;
	}
	
	public Triangle(final double sideOne, final double sideTwo, final double sideThree) throws TriangleException {
		if (sideOne > (sideTwo + sideThree) || 
			sideTwo > (sideOne + sideThree) || 
			sideThree > (sideOne + sideTwo)) {
			throw new TriangleException("Invalid side(s)!");	
		}
		
		this.sideOne = sideOne;
		this.sideTwo = sideTwo;
		this.sideThree = sideThree;
	}
	
	// Setters
	public void setSideOne(final double sideOne) throws TriangleException {
		if (sideOne > (sideTwo + sideThree)) throw new TriangleException("Side one is invalid");
		this.sideOne = sideOne;
	}
	
	public void setSideTwo(final double sideTwo) throws TriangleException {
		if (sideTwo > (sideOne + sideThree)) throw new TriangleException("Side two is invalid");
		this.sideTwo = sideTwo;
	}
	
	public void setSideThree(final double sideThree) throws TriangleException {
		if (sideThree > (sideOne + sideTwo)) throw new TriangleException("Side three is invalid");
		this.sideThree = sideThree;
	}
	
	// Getters
	public double getSideOne() {
		return this.sideOne;
	}
	
	public double getSideTwo() {
		return this.sideTwo;
	}
	
	public double getSideThree() {
		return this.sideThree;
	}
	
	// Class functions
	@Override
	public double calcPerimiter() {
		return sideOne + sideTwo + sideThree;
	}
	
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {s1=" + getSideOne() + ", s2=" + getSideTwo() + ", s3=" + getSideThree() +
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimiter());
	}
}
