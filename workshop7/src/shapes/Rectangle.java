package shapes;

import java.text.DecimalFormat;

/** This class creates a shape of type Rectangle from the class Parallelogram */
public class Rectangle extends Parallelogram {
	
	/** A lambda that implements a Functional Interface
	 * to calculate the area of the rectangle */
	private ShapeArea area = () -> this.width * this.height;
	
	/** 
	 *  Default constructor
	 *  Take no arguments and sets the
	 *  width and height to an empty state
	 * */
	public Rectangle() {
		super();
	}
	
	/**
	 * Two argument constructor
	 * @param width A double representing the width of the rectangle
	 * @param height A double representing the height of the rectangle
	 * @throws ParallelogramException Throws an exception if parameters are negative numbers
	 * */
	public Rectangle(final double width, final double height) throws ParallelogramException {
		super(width, height);
	}
	
	/**
	 * Return a string representing the parallelogram
	 * @return string This returns a string representing the parallelogram 
	 * */
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {w=" + getWidth() + ", h=" + getHeight() + 
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimeter()) +
			   " area = " + new DecimalFormat("0.00000").format(area.calcArea());
	}
}
