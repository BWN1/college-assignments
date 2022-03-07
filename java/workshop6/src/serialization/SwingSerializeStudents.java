package serialization;

import java.util.Arrays;
import java.util.ArrayList;

import java.io.FileOutputStream;
import java.io.ObjectOutputStream;
import java.io.IOException;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

public class SwingSerializeStudents {
	public static void main(String[] args) throws IOException {
		
		/** An array list that holds the students to write to file */
		ArrayList<Student> students = new ArrayList<Student>();
		
		/** Window setup */
		JFrame window = new JFrame("Serialize students into object file");
		window.setLayout(new BoxLayout(window.getContentPane(), BoxLayout.Y_AXIS));
		window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		/** Input components for student form */
		InputComponent studIdInput = new InputComponent("Student ID* ", 10);
		InputComponent studFnameInput = new InputComponent("Student First Name* ", 20);
		InputComponent studLnameInput = new InputComponent("Student Last Name* ", 20);
		InputComponent studCoursesInput = new InputComponent(
						"Enter the student's courses separated by a \',\' (eg. math,science,etc)* ",
						30);
		window.add(studIdInput);
		window.add(studFnameInput);
		window.add(studLnameInput);
		window.add(studCoursesInput);
		
		/** Action buttons */
		ActionButton addStudent = new ActionButton("Add student");
		ActionButton writeToFile = new ActionButton("Write to file");
		window.add(addStudent);
		window.add(writeToFile);
		
		/** Add student to `students` arraylist */
		addStudent.getButton().addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				/** Remove message for write to file button */
				writeToFile.removeActionMessage();;
				
				/** Display error message if inputs are empty */
				if (studIdInput.getTextFieldText().isEmpty() || studFnameInput.getTextFieldText().isEmpty() ||
					studLnameInput.getTextFieldText().isEmpty() || studCoursesInput.getTextFieldText().isEmpty()) {
					addStudent.addErrorMessage("All fields are required to add a student");
				}
				else {
					Student student = new Student();
					
					/** Set student ID */
					int studId = Integer.parseInt(studIdInput.getTextFieldText());
					student.setStudentId(studId);
					studIdInput.clearTextField();
					
					/** Set student first name */
					student.setFirstName(studFnameInput.getTextFieldText());
					studFnameInput.clearTextField();
					
					/** Set student last name */
					student.setLastName(studLnameInput.getTextFieldText());
					studLnameInput.clearTextField();
					
					/** Set student courses */
					String courses[] = studCoursesInput.getTextFieldText().split(",");
					ArrayList<String> coursesList = new ArrayList<>(Arrays.asList(courses));
					student.setCourses(coursesList);
					studCoursesInput.clearTextField();
					
					/** Add student to ArrayList */
					students.add(student);
					addStudent.addSuccessMessage("Added student!");
				}
				
				/** Reload the window */
				window.revalidate();
				window.pack();
			}
		});
		
		/** Write students arraylist to an object */
		writeToFile.getButton().addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				/** Remove message for add student button */
				addStudent.removeActionMessage();
				
				/** 
				 * Serialize and write the `students` ArrayList 
				 * to a file called "students.obj"
				 * */
				if (students.size() > 0) {
					try {
						FileOutputStream fos = new FileOutputStream("students.obj");
						ObjectOutputStream oos = new ObjectOutputStream(fos);
						oos.writeObject(students);
						oos.close();
						fos.close();
						writeToFile.addSuccessMessage("Student objects saved into file \"students.obj\"!");
					} catch (IOException err) {
						err.printStackTrace();
					}
				}
				else {
					writeToFile.addErrorMessage("Please add a student");
				}
				
				/** Reload the window */
				window.revalidate();
				window.pack();
			}
		});
		
		/** Render the window */
		window.pack();
		window.setVisible(true);
	}
}
