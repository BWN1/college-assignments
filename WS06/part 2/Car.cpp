//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#include  <string>
#include  <iostream>
#include  <iomanip>
#include "Car.h"
namespace sdds {
	std::string Car::removeSpaces(const std::string readStr)
	{
		std::string returnStr;
		returnStr = readStr.substr(readStr.find_first_not_of(' '), (readStr.find_first_of(',') - readStr.find_first_not_of(' ')));
		if (returnStr.find_first_of(" ,") != std::string::npos && returnStr.find_last_of(" ,") > returnStr.find_last_not_of(" ,"))
			returnStr.erase(returnStr.find_first_of(" ,", returnStr.find_last_not_of(" ,")));
		return returnStr;
	}

	Car::Car()
	{
		m_topSpeed = 0.0;
		m_maker = "";
		m_condition = "";
		m_booster = "";
	}

	Car::Car(std::istream& istr)
	{
		std::string temp;
		std::getline(istr, temp);

		m_maker = removeSpaces(temp);
		temp.erase(0, temp.find(',') + 1);

		m_condition = removeSpaces(temp);
		if (m_condition == "n" || m_condition.empty()) m_condition = "new";
		else if (m_condition == "u") m_condition = "used";
		else if (m_condition == "b") m_condition = "broken";
		else {
			m_condition = "";
			std::string err = "Invalid record!";
            throw err;
		}
		temp.erase(0, temp.find(',') + 1);

		try {
			m_topSpeed = stod(temp.substr(0, temp.find(',')));
			temp.erase(0, temp.find(',') + 1);
			m_booster = temp;
		}
		catch (std::exception& e) {
			std::string err = "Invalid record!";
			throw err;
		}
	}

	std::string Car::condition() const
	{
		return m_condition;
	}

	double Car::topSpeed() const
	{
		return m_topSpeed;
	}

	void Car::display(std::ostream& out) const
	{
		out << "| " << std::right << std::setw(10) << m_maker << " | "
			<< std::left << std::setw(6) << m_condition << " | "
			<< std::left << std::setw(6) << std::fixed << std::setprecision(2) << topSpeed() << " |";
	}
	std::string Car::booster() const
	{
		return m_booster;
	}
}