//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#ifndef UTILITIES_H
#define UTILITIES_H
#include "Vehicle.h"
#include "Car.h"
#include "Racecar.h"
namespace sdds {
	Vehicle* createInstance(std::istream& in);
	std::string removeSpaces(const std::string readStr);
}
#endif // !UTILITIES_H
