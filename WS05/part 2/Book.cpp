//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#include <iostream>
#include <iomanip>
#include <string>
#include "Book.h"

namespace sdds {
	std::string Book::removeSpaces(const std::string readStr)
	{
		std::string returnStr;
		returnStr = readStr.substr(readStr.find_first_not_of(' '), (readStr.find_first_of(',') - readStr.find_first_not_of(' ')));
		if (returnStr.find_first_of(" ,") != std::string::npos && returnStr.find_last_of(" ,") > returnStr.find_last_not_of(" ,"))
			returnStr.erase(returnStr.find_first_of(" ,", returnStr.find_last_not_of(" ,")));
		return returnStr;
	}
	Book::Book()
	{
		m_year = 0;
		m_price = 0;
	}
	Book::Book(const std::string& strBook)
	{
		std::string temp = strBook;

		m_author = removeSpaces(temp);
		temp.erase(0, temp.find(',') + 1);

		m_title = removeSpaces(temp);
		temp.erase(0, temp.find(',') + 1);

		m_country = removeSpaces(temp);
		temp.erase(0, temp.find(',') + 1);

		m_price = stod(temp.substr(0, temp.find(',')));
		temp.erase(0, temp.find(',') + 1);

		m_year = stoi(temp.substr(0, temp.find(',')));
		temp.erase(0, temp.find(',') + 1);

		m_description = temp.substr(temp.find_first_not_of(' '));
		temp.erase();
	}
	const std::string& Book::title() const
	{
		return m_title;
	}
	const std::string& Book::country() const
	{
		return m_country;
	}
	const size_t& Book::year() const
	{
		return m_year;
	}
	double& Book::price()
	{
		return m_price;
	}
	std::ostream& operator<<(std::ostream& ostr, const Book& book)
	{
		ostr << std::right << std::setw(20) << book.m_author << " | " 
			 << std::right << std::setw(22) << book.title() << " | " 
			 << std::right << std::setw(5) << book.country() << " | " 
			 << std::right << std::setw(4) << book.year() << " | "
			 << std::right << std::setw(6) << std::fixed << std::setprecision(2) << book.m_price << " | "
			 << std::left << book.m_description << std::endl;
		return ostr;
	}
}
