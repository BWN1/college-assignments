package shapes;

/** Creates a functional interface of ShapeArea */
@FunctionalInterface
public interface ShapeArea {
	
	/** 
	 * Creates an abstract method to calculate shape's area
	 * @return double A double indicating the area of the shape
	 */
	double calcArea();
}
