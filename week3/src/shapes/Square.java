package shapes;

import java.text.DecimalFormat;

// A Square is a special case of a Rectangle
public class Square extends Rectangle {
	public Square() {
		super();
	}
	
	public Square(final double width) throws ParallelogramException {
		super(width, width);
	}
	
	// Override setHeight with the width instead as a shape
	// has four even sides
	@Override
	public void setHeight(final double width) throws ParallelogramException {
		setWidth(width);
	}
	
	// Return the width instead
	@Override
	public double getHeight() {
		return getWidth();
	}
	
	@Override
	public double calcPerimiter() {
		return width * 4;
	}
	
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {s=" + getWidth() + "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimiter());
	}
}
