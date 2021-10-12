package shapes;

import java.text.DecimalFormat;

public class Parallelogram implements Shape {
	protected double width, height;
	
	public Parallelogram() {
		this.width = 0.0;
		this.height = 0.0;
	}
	
	public Parallelogram(final double width, final double height) throws ParallelogramException {
		if (width < 0 || height < 0) throw new ParallelogramException("Invalid side!");
		this.width = width;
		this.height = height;
	}
	
	public void setWidth(final double width) throws ParallelogramException {
		if (width < 0) throw new ParallelogramException("Invalid side!");
		this.width = width;
	}
	
	public void setHeight(final double height) throws ParallelogramException {
		if (height < 0) throw new ParallelogramException("Invalid side!");
		this.height = height;
	}
	
	public double getWidth() {
		return this.width;
	}
	
	public double getHeight() {
		return this.height;
	}
	
	@Override
	public double calcPerimiter() {
		return (width * 2) + (height * 2);
	}
	
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {w=" + getWidth() + ", h=" + getHeight() + 
			   "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimiter());
	}
}
