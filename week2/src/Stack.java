public class Stack {
	private char[] charArray;
	
	// Char array should be null upon initialization
	public Stack() {
		charArray = null;
	}
	
	// Push a character to the end of the array
	public void push(char c) {
		char[] newCharArray = null;
		
		if (charArray != null) {
			// Copy all characters to new char array
			newCharArray = new char[charArray.length + 1];
			for (int i = 0; i < newCharArray.length - 1; i++) {
				newCharArray[i] = this.charArray[i];
			}
		}
		else newCharArray = new char[1];
		
		// Update charArray
		newCharArray[newCharArray.length - 1] = c;
		this.charArray = newCharArray;
	}
	
	// Remove and return last character of the array
	public char pop() {
		char popped = charArray[charArray.length - 1];
		
		// Only remove elements if array length > 1
		// else return null for empty array
		if (charArray.length > 1) {
			char[] newCharArray = new char[charArray.length - 1];
			for (int i = 0; i < newCharArray.length; i++) {
				newCharArray[i] = this.charArray[i];
			}
			
			// Update charArray
			this.charArray = newCharArray;
		}
		else charArray = null;
		
		return popped;
	}
}
