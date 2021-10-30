package shapes;

/** This class creates a shape of type Rectangle from the class Parallelogram */
public class Rectangle extends Parallelogram {
	
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
}
