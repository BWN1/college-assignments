public class Palindrome {
	public static void main(String[] args) {
		// Display original string
		final String originalString = args[0];
		System.out.println("The original string is: " + originalString);

		// Display reversed string
		final String reversedString = reverseString(originalString);
		System.out.println("The reversed string is: " + reversedString);

		// Check string is a palindrome
		Boolean isPalindrome = isStringPalindrome(originalString, reversedString);
		if (isPalindrome) System.out.println("The string IS a palindrome");
		else System.out.println("The string is NOT a palindrome");
	}
	
	static String reverseString(final String originalString) {
		String reversedString = "";
		char[] originalStringChars = originalString.toCharArray();
		Stack stack = new Stack();
		
		// Push chars to Stack
		for (int i = 0; i < originalStringChars.length; i++) {
			stack.push(originalStringChars[i]);
		}

		// Add popped chars to 
		for (int i = 0; i < originalString.length(); i++) {
			reversedString += stack.pop();
		}
		
		return reversedString;
	}
	
	static Boolean isStringPalindrome(final String original, final String reversed) {
		return reversed.equals(original) ?  true : false;
	}
}
