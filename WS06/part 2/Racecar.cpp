//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#include <iostream>
#include "Racecar.h"

namespace sdds {
	Racecar::Racecar(std::istream& in) : Car::Car(in), m_booster(0.0)
	{
		m_booster = std::stod(Car::booster());
	}
	void Racecar::display(std::ostream& out) const
	{
		Car::display(out);
		out << "*";
	}
	double Racecar::topSpeed() const
	{
		return Car::topSpeed() * (1 + m_booster);
	}
}
