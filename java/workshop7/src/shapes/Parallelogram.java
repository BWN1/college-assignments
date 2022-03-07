package shapes;

import java.text.DecimalFormat;

/** This class creates a shape of type Parallelogram */
public class Parallelogram implements Shape {
	
	/** Parallelogram's width and height */
	protected double width, height;
	
	/** 
	 *  Default constructor
	 *  Take no arguments and sets the
	 *  width and height to an empty state
	 * */
	public Parallelogram() {
		this.width = 0.0;
		this.height = 0.0;
	}
	
	/**
	 * Two argument constructor
	 * @param width A double representing the width of the parallelogram
	 * @param height A double representing the height of the parallelogram
	 * @throws ParallelogramException Throws an exception if parameters are negative numbers
	 * */
	public Parallelogram(final double width, final double height) throws ParallelogramException {
		if (width < 0 || height < 0) throw new ParallelogramException("Invalid side!");
		this.width = width;
		this.height = height;
	}
	
	/**
	 * Set the width of the Parallelogram
	 * @param width A double representing the new width of the parallelogram
	 * @throws ParallelogramException Throws an exception if the width is a negative number
	 * */
	public void setWidth(final double width) throws ParallelogramException {
		if (width < 0) throw new ParallelogramException("Invalid side!");
		this.width = width;
	}
	
	/**
	 * Set the height of the Parallelogram
	 * @param width A double representing the new height of the parallelogram
	 * @throws ParallelogramException Throws an exception if the height is a negative number
	 * */
	public void setHeight(final double height) throws ParallelogramException {
		if (height < 0) throw new ParallelogramException("Invalid side!");
		this.height = height;
	}
	
	/**
	 * Get the width of the parallelogram
	 * @return double Returns the paralellogram's width
	 * */
	public double getWidth() {
		return this.width;
	}
	
	/**
	 * Get the height of the parallelogram
	 * @return double Returns the paralellogram's height
	 * */
	public double getHeight() {
		return this.height;
	}
	
	/**
	 * Calculate the perimeter of the parallelogram
	 * @return double Returns the paralellogram's perimeter
	 * */
	@Override
	public double calcPerimeter() {
		return (width * 2) + (height * 2);
	}
	
	/**
	 * Return a string representing the parallelogram
	 * @return string This returns a string representing the parallelogram 
	 * */
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {w=" + getWidth() + ", h=" + getHeight() + 
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimeter());
	}
}
