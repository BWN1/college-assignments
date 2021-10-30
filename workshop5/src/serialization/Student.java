package serialization;

import java.io.Serializable;
import java.util.ArrayList;

/** Class that creates objects of type Student */
public class Student implements Serializable {
	
	/** Class fields */
	private int stdId;
	private String firstName;
	private String lastName;
	private ArrayList<String> courses;
	
	/**
	 * Default constructor
	 * Initializes class fields to an empty state
	 * */
	public Student() {
		stdId = 0;
		firstName = "";
		lastName = "";
		courses = null;
	}
	
	/**
	 * Four arg constructor
	 * @param stdId An integer that holds the student's id
	 * @param firstName A string that holds the student's first name
	 * @param lastName A string that holds the student's last name
	 * @param courses An ArrayList of strings that holds the names of the student's courses
	 * */
	public Student(int stdId, String firstName, String lastName, ArrayList<String> courses) {
		this.stdId = stdId;
		this.firstName = firstName;
		this.lastName = lastName;
		this.courses = courses;
	}
	
	/**
	 * Get the student id
	 * @return int Returns the student's id
	 * */
	public int getStudentId() {
		return stdId;
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
	 * Get the student's courses
	 * @return ArrayList<String> Returns the student's courses
	 * */
	public ArrayList<String> getCourses() {
		return courses;
	}
	
	/**
	 * Set the student's id
	 * @param stdId An int representing the student's id
	 * */
	public void setStudentId(int stdId) {
		this.stdId = stdId;
	}
	
	/**
	 * Set the student's first name
	 * @param firstName A string representing the student's first name
	 * */
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	
	/**
	 * Set the student's last name
	 * @param lastName A string representing the student's last name
	 * */
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	
	/**
	 * Set the student's courses
	 * @param ArrayList<String> An ArrayList of strings representing the student's courses
	 * */
	public void setCourses(ArrayList<String> courses) {
		this.courses = courses;
	}
}
