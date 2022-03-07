package serialization;

import java.util.ArrayList;
import java.io.FileInputStream;
import java.io.ObjectInputStream;
import java.io.IOException;

/** A console based class that deserializes and reads student objects from a file */
public class DeserializeStudents {
	public static void main(String[] args) throws IOException, ClassNotFoundException {
		
		/** ArrayList of students that are deserialized */
		ArrayList<Student> students = new ArrayList<Student>();
        
		/** Deserialize the "students" file */
		FileInputStream fis = new FileInputStream("students.obj");
        ObjectInputStream ois = new ObjectInputStream(fis);
        students = (ArrayList) ois.readObject();
        ois.close();
        fis.close();
         
        /** Print all deserialized students */
        System.out.println("Students stored in \"students.obj\"\n");
        for (Student student : students) {
            System.out.println("Student ID: " + student.getStudentId());
            System.out.println("First Name: " + student.getFirstName());
            System.out.println("Last Name: " + student.getLastName());
            System.out.println("Courses: " + student.getCourses());
            System.out.println();
        }
	}
}
