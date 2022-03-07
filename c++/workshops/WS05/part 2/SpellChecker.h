//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#ifndef SPELLCHECKER_H
#define SPELLCHECKER_H
#include <string>
const int arrLength = 6;

namespace sdds {
	class SpellChecker {
		std::string m_badWords[6];
		std::string m_goodWords[6];
		size_t wordsReplaced[6];
	public:
		SpellChecker(const char* filename);
		void operator()(std::string& text);
		void showStatistics(std::ostream& out) const;
	};
}
#endif