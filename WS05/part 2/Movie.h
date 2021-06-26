//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#ifndef MOVIE_H
#define MOVIE_H
#include <string>

namespace sdds {
	class Movie {
		std::string m_title;
		size_t m_year;
		std::string m_description;
		std::string removeSpaces(const std::string readStr); //included to clean up code in 1 arg constructor
	public:
		Movie();
		Movie(const std::string& strMovie);
		const std::string& title() const;
		friend std::ostream& operator<<(std::ostream& ostr, const Movie& movie);

		template <typename T>
		void fixSpelling(T& spellChecker) {
			spellChecker(m_title);
			spellChecker(m_description);
		}
	};
}
#endif