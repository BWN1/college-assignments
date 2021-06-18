//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
#include <string>
#include <iostream>
#include <iomanip>
#include "Reservation.h"

namespace sdds {
	Reservation::Reservation()
	{
		partySize = 0;
		resDay = 0;
		resHour = 0;
	}

	Reservation::Reservation(const std::string& res)
	{
		std::string temp = res;

		//This gets the length of the string and trims the leading whitespace
		resID = temp.substr(temp.find_first_not_of(' '), (temp.find_first_of(':') - temp.find_first_not_of(' ')));
		//This checks if there is traling whitespace or a character that should not be there
		if (resID.find_first_of(" :") != std::string::npos && resID.find_last_of(" :") > resID.find_last_not_of(" :"))
			//This removes the trailing whitespace
			resID.erase(resID.find_first_of(" :", resID.find_last_not_of(" :")));
		temp.erase(0, temp.find(':') + 1);

		resName = temp.substr(temp.find_first_not_of(' '), (temp.find_first_of(',') - temp.find_first_not_of(' ')));
		if (resName.find_first_of(" ,") != std::string::npos && resName.find_last_of(" ,") > resName.find_last_not_of(" ,"))
			resName.erase(resName.find_first_of(" ,", resName.find_last_not_of(" ,")));
		temp.erase(0, temp.find(',') + 1);

		resEmail = temp.substr(temp.find_first_not_of(' '), (temp.find_first_of(',') - temp.find_first_not_of(' ')));
		if (resEmail.find_first_of(" ,") != std::string::npos && resEmail.find_last_of(" ,") > resEmail.find_last_not_of(" ,"))
			resEmail.erase(resEmail.find_first_of(" ,", resEmail.find_last_not_of(" ,")));
		temp.erase(0, temp.find(',') + 1);

		//No need to trim as stoi will convert to an int
		partySize = stoi(temp.substr(0, temp.find(',')));
		temp.erase(0, temp.find(',') + 1);

		resDay = stoi(temp.substr(0, temp.find(',')));
		temp.erase(0, temp.find(',') + 1);

		resHour = stoi(temp.substr(0, temp.find(',')));
		temp.erase(0);
	}

	std::ostream& operator<<(std::ostream& ostr, const Reservation& res)
	{
		ostr << "Reservation " << std::right << std::setw(10) << res.resID << ": "
			<< std::setw(20) << res.resName << "  ";
		ostr << std::left << std::setw(20) << ("<" + res.resEmail + ">");

		if (res.resHour >= 6 && res.resHour <= 9) ostr << "    Breakfast";
		else if (res.resHour >= 11 && res.resHour <= 15) ostr << "    Lunch";
		else if (res.resHour >= 17 && res.resHour <= 21) ostr << "    Dinner";
		else ostr << "    Drinks";

		ostr << " on day " << res.resDay << " @ " << res.resHour << ":00 for " << res.partySize;
		if (res.partySize > 1) ostr << " people." << std::endl;
		else ostr <<" person." << std::endl;

		return ostr;
	}
}
