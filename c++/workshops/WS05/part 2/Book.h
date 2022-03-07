//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#ifndef BOOK_H
#define BOOK_H
#include <string>
namespace sdds {
	class Book {
		std::string m_author;
		std::string m_title;
		std::string m_country;
		size_t m_year;
		double m_price;
		std::string m_description;
		std::string removeSpaces(const std::string readStr); //included to clean up code in 1 arg constructor
	public:
		Book();
		Book(const std::string& strBook);
		const std::string& title() const;
		const std::string& country() const;
		const size_t& year() const;
		double& price();
		friend std::ostream& operator<<(std::ostream& ostr, const Book& book);

		template <typename T>
		void fixSpelling(T& spellChecker) {
			spellChecker(m_description);
		}
	};
}
#endif
