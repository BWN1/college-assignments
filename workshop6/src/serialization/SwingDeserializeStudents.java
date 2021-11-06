package serialization;

import java.util.ArrayList;

import java.io.FileInputStream;
import java.io.ObjectInputStream;

import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;

import javax.swing.*;

public class SwingDeserializeStudents {
	public static void main(String[] args) {
		
		/** Window setup*/
		JFrame window = new JFrame("Deserialize Students");
		window.setLayout(new BoxLayout(window.getContentPane(), BoxLayout.Y_AXIS));
		window.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
		
		/** File name input */
		InputComponent fileInput = new InputComponent("File to deserialize students: ", 20);
		ActionButton startDeserialize = new ActionButton("Get students");
		window.add(fileInput);
		window.add(startDeserialize);
		
		/** Container panel for student panels */
		GridPanel container = new GridPanel();
		window.add(container);
		
		/** Write students arraylist to an object */
		startDeserialize.getButton().addActionListener(new ActionListener() {
			public void actionPerformed(ActionEvent e) {
				
				/** ArrayList of students that are deserialized */
				ArrayList<Student> students = new ArrayList<Student>();
				ArrayList<StudentPanel> studentPanels = new ArrayList<StudentPanel>();
				
				/** File input text field text */
				String fileInputTextFieldText = fileInput.getTextFieldText();
				
				/** Deserialize the "students" file */
				try {
					FileInputStream fis = new FileInputStream(fileInputTextFieldText);
			        ObjectInputStream ois = new ObjectInputStream(fis);
			        students = (ArrayList) ois.readObject();
			        ois.close();
			        fis.close();

			        /** Create labels for the students */
			        for (Student student : students) {
			        	studentPanels.add(new StudentPanel(student));
			        }
			        
			        /** Display students */
			        for (JPanel panel : studentPanels) {
			        	container.add(panel);
			        }
			        
			        startDeserialize.removeActionMessage();
			        fileInput.clearTextField();
				}
				catch (Exception err) {
					if (fileInputTextFieldText.isEmpty()) {
						startDeserialize.addErrorMessage("Please enter a file name");	
					} else {
						startDeserialize.addErrorMessage("Unable to open file \'" + fileInputTextFieldText + "\'");
					}
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
	
	private static class StudentPanel extends JPanel {
		
		/**
		 * One argument constructor
		 * @param student A Student object
		 * */
		public StudentPanel(Student student) {
			/** Initialize the panel */
			super();
			setLayout(new BoxLayout(this, BoxLayout.Y_AXIS));
        	setBorder(BorderFactory.createEmptyBorder(10, 10, 10, 10));
        	
        	/** Add labels for each field */
			add(new JLabel("Student ID: " + student.getStudentId()));
        	add(new JLabel("First Name: " + student.getFirstName()));
        	add(new JLabel("Last Name: " + student.getLastName()));
        	add(new JLabel("Courses: " + student.getCourses()));
		}
	}
}
