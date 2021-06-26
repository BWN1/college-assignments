//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#include "SpellChecker.h"
#include <string>
#include <iostream>
#include <iomanip>
#include <fstream>
extern const int arrLength;

namespace sdds {
	SpellChecker::SpellChecker(const char* filename)
	{
		try {
			std::ifstream file(filename);
			if (!file) throw "Bad file name!";

			std::string line;
			int counter = 0;
			while (getline(file, line)) {
				m_badWords[counter] = line.substr(0, line.find_first_of(' '));
				m_goodWords[counter] = line.substr(line.find_last_of(' ') + 1);
				wordsReplaced[counter] = 0;
				counter++;
			}
		}
		catch (const char* msg) {
			throw;
		}
	}
	void SpellChecker::operator()(std::string& text)
	{
		for (auto i = 0; i < arrLength; i++) {
			while (text.find(m_badWords[i]) != std::string::npos) {
				text.replace(text.find(m_badWords[i]), m_badWords[i].length(), m_goodWords[i]);
				wordsReplaced[i]++;
			}
		}
	}
	void SpellChecker::showStatistics(std::ostream& out) const
	{
		out << "Spellchecker Statistics" << std::endl;
		for (auto i = 0; i < arrLength; i++) {
			out << std::right << std::setw(15) << m_badWords[i] << ": " << wordsReplaced[i] << " replacements" << std::endl;
		}
	}
}