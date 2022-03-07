//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 2 - Copy and Move Semantics
// Brody Neumann - June 4, 2021
// Brody Neumann - June 5, 2021
#ifndef TIMEEVENTS_H
#define TIMEEVENTS_H
#include <chrono>
#include <string>

namespace sdds {
    class TimedEvents {
        int numRecords;
        std::chrono::time_point<std::chrono::steady_clock> start;
        std::chrono::time_point<std::chrono::steady_clock> end;
        struct Event {
            std::string eventName;
            std::string unitsOfTime;
            std::chrono::duration<long, std::nano> duration;
        } eventArr[10];
    public:
        TimedEvents();
        void startClock();
        void stopClock();
        void addEvent(const char* eventName);
        friend std::ostream& operator<<(std::ostream& ostr, const TimedEvents& event);
    }; 
}

#endif