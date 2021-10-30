package serialization;

import java.util.Arrays;
import java.util.ArrayList;

import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;

/** A console based class that serializes and saves student objects to a file */
public class SerializeStudents {
	public static void main(String[] args) throws IOException {
		
		/** An array list that holds the students to write to file */
		ArrayList<Student> students = new ArrayList<Student>();
		
		/** A boolean used to exit the while loop for adding students */
		Boolean exit = false;
		
		// Console input
		BufferedReader console = new BufferedReader(new InputStreamReader(System.in));
		
		/** 
		 * A while loop that prompts the user to enter
		 * information for at least one student
		 * */
		while (!exit) {
			
			/** Student to be added to the `students` ArrayList */
			Student student = new Student();
			
			/** Get the student id */
			System.out.print("Enter the student's id: ");
			int stdId = Integer.parseInt(console.readLine());
			student.setStudentId(stdId);
			
			/** Get the student's first name */
			System.out.print("Enter the student's first name: ");
			String firstName = console.readLine();
			student.setFirstName(firstName);
			
			/** Get the student's last name */
			System.out.print("Enter the student's last name: ");
			String lastName = console.readLine();
			student.setLastName(lastName);
			
			/** Get the student's courses */
			System.out.print("Enter the student's courses separated by a \',\' (eg. math,science,etc): ");
			String courses[] = console.readLine().split(",");
			ArrayList<String> coursesList = new ArrayList<>(Arrays.asList(courses));
			student.setCourses(coursesList);
			
			// Add student to ArrayList
			students.add(student);
			
			/** 
			 * A while loop that prompts the user if they want
			 * to add more students. It will either set `exit` to false
			 * and continue adding students or it will set `exit` to true
			 * and stop the loop
			 * */
			Boolean validInput = false;
			System.out.println();
			
			while(!validInput) {
				System.out.print("Add more students? (y/n): ");
				String addMoreStudents = console.readLine().toUpperCase();
				
				switch(addMoreStudents) {
				case "Y":
					validInput = true;
					exit = false;
					break;
				case "N":
					validInput = true;
					exit = true;
					break;
				default:
					validInput = false;
					break;
				}
			}
			
			System.out.println();
		}
		
		/** 
		 * Serialize and write the `students` ArrayList 
		 * to a file called "students"
		 * */
		FileOutputStream fos = new FileOutputStream("students");
		ObjectOutputStream oos = new ObjectOutputStream(fos);
		oos.writeObject(students);
		oos.close();
		fos.close();
		
		System.out.println("Student objects saved into file \"students\"");
	}
}
