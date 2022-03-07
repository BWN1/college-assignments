//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
#include <string>
#ifndef RESERVATION_H
#define RESERVATION_H
namespace sdds {
	class Reservation {
		std::string resID;
		std::string resName;
		std::string resEmail;
		unsigned int partySize;
		unsigned int resDay;
		unsigned int resHour;
	public:
		Reservation();
		Reservation(const std::string& res);
		friend std::ostream& operator<<(std::ostream& ostr, const Reservation& res);
	};
}

#endif
