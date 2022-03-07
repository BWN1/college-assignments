//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 2 - Copy and Move Semantics
// Brody Neumann - June 4, 2021
// Brody Neumann - June 5, 2021
#include <string>
#include <fstream>
#include <iostream>
#include "StringSet.h"

namespace sdds {
    StringSet::StringSet()
    {
        strings = nullptr;
        numStrings = 0;
    }
    StringSet::StringSet(const StringSet& ss)
    {
        if (this != &ss) {
            strings = new std::string[ss.numStrings];
            numStrings = ss.numStrings;
            for (size_t i = 0; i < ss.numStrings; i++) {
                strings[i] = ss.strings[i];
            }
        }
    }
    StringSet::StringSet(StringSet&& ss)
    {
        if (this != &ss) {
            strings = std::move(ss.strings);
            numStrings = std::move(ss.numStrings);

            ss.strings = nullptr;
            ss.numStrings = 0;
        }
    }
    StringSet::StringSet(const char* fileName)
    {
        strings = nullptr;
        numStrings = 0;

        std::ifstream file(fileName);
        std::string str;
        if (file.is_open()) {
            while (getline(file, str, ' ')) numStrings++;
            file.clear();
            file.seekg(0);

            strings = new std::string[numStrings];
            for (size_t i = 0; i < numStrings && !file.eof(); i++) {
                getline(file, strings[i], ' ');
            }
        }

    }
    StringSet::~StringSet()
    {
        delete[] strings;
    }
    size_t StringSet::size() const
    {
        return numStrings;
    }
    StringSet& StringSet::operator=(const StringSet& ss)
    {
        if (this != &ss) {
            strings = new std::string[ss.numStrings];
            numStrings = ss.numStrings;
            for (size_t i = 0; i < ss.numStrings; i++) {
                strings[i] = ss.strings[i];
            }
        }
        return *this;
    }
    StringSet& StringSet::operator=(StringSet&& ss)
    {
        if (this != &ss) {
            strings = std::move(ss.strings);
            numStrings = std::move(ss.numStrings);

            ss.strings = nullptr;
            ss.numStrings = 0;
        }
        return *this;
    }
    std::string StringSet::operator[](size_t index) const
    {
        if (index < numStrings) return strings[index];
        return "";
    }
}