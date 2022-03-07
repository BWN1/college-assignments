package workshop8;

import java.text.DecimalFormat;

/** This class creates a Student object */
public class Student {
	
	/** Class fields */
	private String firstName;
	private String lastName;
	private double grade;
	private String department;
	
	/**
	 * 4 arg constructor
	 * @param firstName A string representing the student's first name
	 * @param lastName A string representing the student's last name
	 * @param grade A double representing the student's grade
	 * @param department A string representing the student's department
	 */
	public Student(String firstName, String lastName, double grade, String department) {
		this.firstName = firstName;
		this.lastName = lastName;
		this.grade = grade;
		this.department = department;
	}
	
	/**
	 * Get the student's first name
	 * @return String Returns the student's first name
	 * */
	public String getFirstName() {
		return firstName;
	}
	
	/**
	 * Get the student's last name
	 * @return String Returns the student's last name
	 * */
	public String getLastName() {
		return lastName;
	}
	
	/**
	 * Get the student's grade
	 * @return double Returns the student's grade
	 * */
	public double getGrade() {
		return grade;
	}
	
	/**
	 * Get the student's department
	 * @return String Returns the student's department
	 * */
	public String getDepartment() {
		return department;
	}
	
	/**
	 * Set the student's first name
	 * @param firstName A String representing the student's first name
	 * */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	/**
	 * Set the student's last name
	 * @param lastName A String representing the student's last name
	 * */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	/**
	 * Set the student's grade
	 * @param grade A String representing the student's grade
	 * */
	public void setGrade(double grade) {
		this.grade = grade;
	}
	
	/**
	 * Set the student's department
	 * @param department A String representing the student's department
	 * */
	public void setDepartment(String department) {
		this.department = department;
	}
	
	/**
	 * Returns the student's full name
	 * @return A string representing student full name
	 */
	public String getFullName() {
		return firstName + " " + lastName;
	}
	
	/**
	 * Return a string representing the Student
	 * @return string This returns a string representing the Student 
	 * */
	@Override
	public String toString() {
		return firstName + "\t" + lastName + "\t\t" 
				+ new DecimalFormat("0.00").format(grade) + "\t"
				+ department;
	}
	
	/**
	 * Check if two student objects are equal
	 * @param obj A Student object
	 * @return A boolean representing if the two student objects are equal
	 */
	public boolean equals(Student obj) {
		return this.firstName == obj.getFirstName() && this.lastName == obj.getLastName()
			&& this.grade == obj.getGrade() && this.department == obj.getDepartment();
	}
}
