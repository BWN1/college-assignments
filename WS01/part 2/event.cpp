// Workshop 1 - Linkage, Storage Duration, Namespaces, and OS Interface
// Brody Neumann - May 25, 2021
#include <cstring>
#include <iostream>
#include <iomanip>
#include "event.h"

unsigned int g_sysClock;

namespace sdds {
    Event::Event(const Event& right) {
        operator=(right);
    }
    
    Event& Event::operator=(const Event& right) {
        if (this != &right) {
            if (right.desc != nullptr) {
                desc = new char[strlen(right.desc) + 1]();
                strcpy(desc, right.desc);
                eventStart = right.eventStart;
            }
            else {
                desc = nullptr;
                eventStart = 0;
            }
        }
        return *this;
    }

    Event::~Event() {
        delete[] desc;
    }

    void Event::display() {
        static int counter = 1;

        //Will always be displayed even if the event is empty
        std::cout.width(2);
        std::cout.fill(' ');
        std::cout.setf(std::ios::right);
        std::cout << counter << ". ";

        //Event is not empty
        if (desc) {
            //Convert seconds to hours, mins and "remaining" seconds
            int hours = eventStart / 3600,
                mins = (eventStart % 3600) / 60,
                secs = eventStart % 60;

            std::cout.width(2);
            std::cout.fill('0');
            std::cout << hours << ":";
            std::cout.width(2);
            std::cout.fill('0');
            std::cout << mins << ":";
            std::cout.width(2);
            std::cout.fill('0');
            std::cout << secs << " => ";
            std::cout << desc << std::endl;
        }
        //Event is empty
        else std::cout << "| No Event |" << std::endl;
        counter++;
    }

    void Event::set(const char arr[]) {
        if (arr && arr[0] != '\0') {
            desc = new char[strlen(arr) + 1]();
            strcpy(desc, arr);
            eventStart = g_sysClock;
        }
        else desc = nullptr;
    }
}