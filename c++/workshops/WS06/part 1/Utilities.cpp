//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#include <string>
#include <sstream>
#include "Utilities.h"

namespace sdds {
	Vehicle* createInstance(std::istream& in)
	{
		std::string type, temp;
		std::getline(in, temp);

		if (!temp.empty()) {
			type = removeSpaces(temp);
			temp.erase(0, temp.find(',') + 1);

			std::stringstream ss(temp);

			if (type == "c" || type == "C") {
				return new Car(ss);
			}
			else return nullptr;
		}

		return nullptr;
	}

	std::string removeSpaces(const std::string readStr)
	{
		std::string returnStr;
		returnStr = readStr.substr(readStr.find_first_not_of(' '), (readStr.find_first_of(',') - readStr.find_first_not_of(' ')));
		if (returnStr.find_first_of(" ,") != std::string::npos && returnStr.find_last_of(" ,") > returnStr.find_last_not_of(" ,"))
			returnStr.erase(returnStr.find_first_of(" ,", returnStr.find_last_not_of(" ,")));
		return returnStr;
	}
}
