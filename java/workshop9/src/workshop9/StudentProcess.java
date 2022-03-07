package workshop9;

import java.util.Arrays;
import java.text.DecimalFormat;
import java.util.stream.Collectors;
import java.util.Comparator;
import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.TreeMap;

/** This is the main class to run the program */
public class StudentProcess {
	public static void main(String[] args) {
		
		/** Creates an array of students */
		 Student[] students = { 
	         new Student("Jack", "Smith", 50.0, "IT"), 
	         new Student("Aaron", "Johnson", 76.0, "IT"), 
	         new Student("Maaria", "White", 35.8, "Business"), 
	         new Student("John", "White", 47.0, "Media"), 
	         new Student("Laney", "White", 62.0, "IT"), 
	         new Student("Jack", "Jones", 32.9, "Business"), 
	         new Student("Wesley", "Jones", 42.89, "Media")
		}; 
		
		/** 
		 * Task 1 
		 * Create a list from the students array and
		 * print out all elements
		 * */
		System.out.println("Task 1:\n");
		System.out.println("Complete Student list:");
		List<Student> studentsList = Arrays.asList(students);
		studentsList.forEach(System.out::println);
		
		/** 
		 * Task 2 
		 * Display students with a grade between 50.0 and 100.0
		 * sorted in ascending order
		 * */
		System.out.println("\n\nTask 2:");
		System.out.println("Students who got 50.0-100.0 sorted by grade:");
		studentsList.stream()
			.filter(student -> student.getGrade() >= 50 && student.getGrade() <= 100)
			.sorted(Comparator.comparing(Student::getGrade))
			.forEach(System.out::println);
		
		/** 
		 * Task 3
		 * Display first student in the list who has
		 * a grade range between 50.0 and 100.0
		 * */
		System.out.println("\n\nTask 3:\n");
		System.out.println("First Student who got 50.0-100.0:");
		Optional<Student> firstStudent = studentsList.stream()
			.filter(student -> student.getGrade() >= 50 && student.getGrade() <= 100)
			.findFirst();
		System.out.println(firstStudent.get());
		
		/** 
		 * Task 4
		 * Sort the students by their last name and then their
		 * first names in ascending order
		 *  */
		System.out.println("\n\nTask 4:\n");
		System.out.println("Students in ascending order by last name then first:");
		studentsList.stream()
			.sorted(Comparator.comparing(Student::getFirstName))
			.sorted(Comparator.comparing(Student::getLastName))
			.forEach(System.out::println);
		
		/** 
		 * Task 4
		 * Sort the students by their last name and then their
		 * first names in descending order
		 *  */
		System.out.println("\nStudents in descending order by last name then first:");
		studentsList.stream()
			.sorted(Comparator.comparing(Student::getFirstName).reversed())
			.sorted(Comparator.comparing(Student::getLastName).reversed())
			.forEach(System.out::println);
		
		/**
		 * Task 5
		 * Display unique student last names
		 * */
		System.out.println("\n\nTask 5:\n");
		System.out.println("Unique Student last names:");
		studentsList.stream()
			.sorted(Comparator.comparing(Student::getLastName))
			.map(Student::getLastName)
			.distinct()
			.forEach(System.out::println);
		
		/** 
		 * Task 6 
		 * Display Student full names, sorted in order 
		 * by last name then first name.
		 * */
		System.out.println("\n\nTask 6:\n");
		System.out.println("Student names in order by last name then first name:");
		studentsList.stream()
			.sorted(Comparator.comparing(Student::getLastName).thenComparing(Student::getFirstName))
			.map(Student::getFullName)
			.forEach(System.out::println);
		
		/** 
		 * Task 7 
		 * Display Students, grouped by their departments.
		 * */
		System.out.println("\n\nTask 7:\n");
		System.out.println("Students by department:");
		Map<String, List<Student>> task7 = studentsList.stream()
			.collect(Collectors.groupingBy(Student::getDepartment));
		
		task7.forEach((key, value) -> {
			System.out.println(key);
			value.forEach(student -> System.out.println("   " + student.toString()));
		});
		
		/** 
		 * Task 8 
		 * Count and display the number of Students in each department.
		 * */
		System.out.println("\n\nTask 8:\n");
		System.out.println("Count of Students by department:");
		Map<String, Long> task8 = studentsList.stream()
			.collect(Collectors.groupingBy(Student::getDepartment))
			.entrySet()
			.stream()
			.collect(Collectors.toMap(Map.Entry::getKey, value -> Long.valueOf(value.getValue().size())));
		
		new TreeMap<String, Long>(task8).forEach((key, value) -> 
			System.out.println(key + " has " + value + " Student(s)")
		);
		
		/** 
		 * Task 9 
		 * Calculate and display the sum of all Students’ grades.
		 * */
		System.out.println("\n\nTask 9:\n");
		System.out.println("Sum of Students' grades: " + 
			studentsList.stream()
			.mapToDouble(Student::getGrade)
			.summaryStatistics()
			.getSum());
		
		/** 
		 * Task 10 
		 * Calculate and display the average of all Students’ grades.
		 * */
		System.out.println("\n\nTask 10:\n");
		System.out.println("Average of Students' grades: " + 
							new DecimalFormat("0.00").format(studentsList.stream()
							.mapToDouble(Student::getGrade)
							.summaryStatistics()
							.getAverage()));
		
	}

}
