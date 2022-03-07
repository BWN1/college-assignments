package shapes;

import java.text.DecimalFormat;

/** This class creates a shape of type Square from the class Rectangle */
public class Square extends Rectangle {
	
	/** A lambda that implements a Functional Interface
	 * to calculate the area of the rectangle */
	private ShapeArea area = () -> this.width * this.width;
	
	/** 
	 *  Default constructor
	 *  Take no arguments and sets the
	 *  width and height to an empty state
	 * */
	public Square() {
		super();
	}
	
	/**
	 * One argument constructor
	 * @param width A double representing the width of the square
	 * @throws ParallelogramException Throws an exception if parameters are negative numbers
	 * */
	public Square(final double width) throws ParallelogramException {
		super(width, width);
	}
	
	/**
	 * This overrides the setHeight function of Parallelogram
	 * to set the width of the square instead of the height. 
	 * A square only has four even sides and this prevents the
	 * user from incorrectly setting the wrong variable
	 * @param width A double representing the width of the square
	 * @throws ParallelogramException Throws an exception if the value is negative
	 * */
	@Override
	public void setHeight(final double width) throws ParallelogramException {
		setWidth(width);
	}
	
	/**
	 * This overrides the getHeight function of Parallelogram
	 * as the Square class only uses the width instance variable
	 * @return double A double representing the width of the square
	 * */
	@Override
	public double getHeight() {
		return getWidth();
	}
	
	/**
	 * Calculate the perimeter of the square
	 * @return double Returns the perimeter of the square
	 * */
	@Override
	public double calcPerimeter() {
		return width * 4;
	}
	
	/**
	 * Return a string representing the square
	 * @return string This returns a string representing the square 
	 * */
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {s=" + getWidth() + 
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimeter()) +
			   " area = " + new DecimalFormat("0.00000").format(area.calcArea());
	}
}
