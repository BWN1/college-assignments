// Workshop 1 - Linkage, Storage Duration, Namespaces, and OS Interface
// Brody Neumann - May 25, 2021
#ifndef EVENT_H
#define EVENT_H
extern unsigned int g_sysClock;

namespace sdds {
    class Event {
        char* desc;
        unsigned int eventStart;
    public:
        Event();
        Event(const Event& right);
        Event& operator=(const Event& right);
        ~Event();
        void display();
        void set(const char arr[] = nullptr);
    };
}

#endif