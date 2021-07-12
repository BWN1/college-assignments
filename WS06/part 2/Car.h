//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#ifndef CAR_H
#define CAR_H
#include "Vehicle.h"
#include <string>
#include <iostream>
namespace sdds {
	class Car : public Vehicle {
		std::string m_maker;
		std::string m_condition;
		double m_topSpeed;
		std::string m_booster;
		std::string removeSpaces(const std::string readStr); //included to clean up code in 1 arg constructor
	public:
		Car();
		Car(std::istream& istr);
		std::string condition() const;
		double topSpeed() const;
		void display(std::ostream& out) const;
		std::string booster() const;
	};
}
#endif // !CAR_H
