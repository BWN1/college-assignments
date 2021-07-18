// Name: Brody Neumann
// Seneca Student ID: 134873207
// Seneca email: bneumann@myseneca.ca
// Date of completion: July 17, 2021
//
// I confirm that I am the only author of this file
// and the content was created entirely by me.
#include "Utilities.h"

namespace sdds {
	//Declare static variable
	char Utilities::m_delimiter;

	Utilities::Utilities()
	{
		m_widthField = 1;
	}
	void Utilities::setFieldWidth(size_t newWidth)
	{
		m_widthField = newWidth;
	}
	size_t Utilities::getFieldWidth() const
	{
		return m_widthField;
	}
	std::string Utilities::extractToken(const std::string& str, size_t& next_pos, bool& more)
	{
		std::string temp;

		if (str[next_pos] == m_delimiter) {
			more = false;
			throw("Delimiter found at new position.");
		}
		else if (str.find(m_delimiter, next_pos) == std::string::npos) {
			temp = str.substr(next_pos);
			more = false;
			next_pos = 0;
		}
		else {
			temp = str.substr(next_pos, str.find_first_of(m_delimiter, next_pos) - next_pos);
			more = true;
			next_pos = str.find(m_delimiter, next_pos) + 1; //+1 to remove delimiter from next token
		}

		if (m_widthField < temp.length()) m_widthField = temp.length();

		return temp;
	}
	void Utilities::setDelimiter(char newDelimiter)
	{
		m_delimiter = newDelimiter;
	}
	char Utilities::getDelimiter()
	{
		return m_delimiter;
	}
}