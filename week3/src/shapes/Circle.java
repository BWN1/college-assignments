package shapes;

import java.text.DecimalFormat;

public class Circle implements Shape {
	private double radius;
	
	public Circle() {
		this.radius = 0.0;
	}
	
	public Circle(final double radius) throws CircleException {
		if (radius < 0) throw new CircleException("Invalid radius!");
		this.radius = radius;
	}
	
	public void setRadius(final double radius) throws CircleException {
		if (radius < 0) throw new CircleException("Invalid radius!");
		this.radius = radius;
	}
	
	public double getRadius() {
		return this.radius;
	}
	
	@Override
	public double calcPerimiter() {
		return 2 * Math.PI * radius;
	}
	
	@Override
	public String toString() {
		return getClass().getSimpleName() + 
			   " {r=" + getRadius() + "} perimeter = " + new DecimalFormat("0.00000").format(calcPerimiter());
	}
}
