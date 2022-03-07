//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#include <iostream>
#include <iomanip>
#include <string>
#include "Movie.h"

namespace sdds {
	std::string Movie::removeSpaces(const std::string readStr)
	{
		std::string returnStr;
		returnStr = readStr.substr(readStr.find_first_not_of(' '), (readStr.find_first_of(',') - readStr.find_first_not_of(' ')));
		if (returnStr.find_first_of(" ,") != std::string::npos && returnStr.find_last_of(" ,") > returnStr.find_last_not_of(" ,"))
			returnStr.erase(returnStr.find_first_of(" ,", returnStr.find_last_not_of(" ,")));
		return returnStr;
	}
	Movie::Movie()
	{
		m_year = 0;
	}
	Movie::Movie(const std::string& strMovie)
	{
		std::string temp = strMovie;

		m_title = removeSpaces(temp);
		temp.erase(0, temp.find(',') + 1);

		m_year = stoi(temp.substr(0, temp.find(',')));
		temp.erase(0, temp.find(',') + 1);

		m_description = temp.substr(temp.find_first_not_of(' '));
		temp.erase();
	}
	const std::string& Movie::title() const
	{
		return m_title;
	}
	std::ostream& operator<<(std::ostream& ostr, const Movie& movie)
	{
		ostr << std::right << std::setw(40) << movie.title() << " | "
			 << std::right << std::setw(4) << movie.m_year << " | "
			 << std::left << movie.m_description << std::endl;
		return ostr;
	}
}