package shapes;

// A Rectangle is a special case of a Parallelogram
public class Rectangle extends Parallelogram {	
	public Rectangle() {
		super();
	}
	
	public Rectangle(final double width, final double height) throws ParallelogramException {
		super(width, height);
	}
}
