//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 2 - Copy and Move Semantics
// Brody Neumann - June 4, 2021
// Brody Neumann - June 5, 2021
#ifndef STRINGSET_H
#define STRINGSET_H
#include <string>

namespace sdds {
	class StringSet {
		std::string* strings;
		size_t numStrings;
	public:
		StringSet();
		StringSet(const char* fileName);
		StringSet(const StringSet& ss);
		StringSet(StringSet&& ss);
		~StringSet();
		size_t size() const;
		StringSet& operator=(const StringSet& ss);
		StringSet& operator=(StringSet&& ss);
		std::string operator[](size_t) const;
	};
}

#endif