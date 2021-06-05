//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 2 - Copy and Move Semantics
// Brody Neumann - June 4, 2021
// Brody Neumann - June 5, 2021
#include <chrono>
#include <string>
#include <iostream>
#include <iomanip>
#include "TimedEvents.h"

namespace sdds {
	TimedEvents::TimedEvents()
	{
		numRecords = 0;
	}

	void TimedEvents::startClock()
	{
		start = std::chrono::steady_clock::now();
	}

	void TimedEvents::stopClock()
	{
		end = std::chrono::steady_clock::now();
	}

	void TimedEvents::addEvent(const char* eventName)
	{
		if (numRecords < 10) {
			eventArr[numRecords].eventName = eventName;
			eventArr[numRecords].unitsOfTime = "nanoseconds";
			eventArr[numRecords].duration = std::chrono::duration_cast<std::chrono::nanoseconds>(end - start);
			numRecords++;
		}
	}

	std::ostream& operator<<(std::ostream& ostr, const TimedEvents& event)
	{
		std::cout << "--------------------------" << std::endl
			<< "Execution Times:" << std::endl
			<< "--------------------------" << std::endl;
		for (int i = 0; i < event.numRecords; i++) {
			std::cout.width(21);
			std::cout.fill(' ');
			std::cout.setf(std::ios::left);
			std::cout << event.eventArr[i].eventName;

			std::cout.width(13);
			std::cout.setf(std::ios::right);
			std::cout << event.eventArr[i].duration.count() << " " << event.eventArr[i].unitsOfTime << std::endl;
			std::cout.unsetf(std::ios::right);
		}
		std::cout << "--------------------------" << std::endl;

		return ostr;
	}

}
