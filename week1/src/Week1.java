public class Week1 {
	public static void main(String[] args) {
		int MAX_ROWS = 8;
		
		for (int i = 1; i <= MAX_ROWS; i++) {
			int totalNumbers = (i * 2) - 1;
			int midpoint = ((i * 2) / 2) - 1;
			for (int j = 1, numLoops = 0; numLoops < totalNumbers; ++numLoops) {
				System.out.print(j + " ");
				j = (numLoops < midpoint) ? j *= 2 : j / 2;
			}
			System.out.println();
		}
	}
}
