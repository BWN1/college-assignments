public class Week1 {
	public static void main(String[] args) {
		int MAX_ROWS = 8;
		
		for (int i = 1; i <= MAX_ROWS; i++) {
			int totalNumbers = (i * 2) - 1;
			int midpoint = ((i * 2) / 2) - 1;
			
			// Print spaces to align triangle
			for (int j = 0; j < MAX_ROWS - i; j++)
				System.out.print("    ");
			
			// Print the numbers
			for (int j = 1, numLoops = 0; numLoops < totalNumbers; ++numLoops) {
				System.out.printf("%3d ", j);
				j = (numLoops < midpoint) ? j *= 2 : j / 2;
			}
			System.out.println();
		}
	}
}
