// Workshop 2 - Copy and Move Semantics
// Brody Neumann - June 4, 2021
#ifndef STRINGSET_H
#define STRINGSET_H
#include <string>

namespace sdds {
	class StringSet {
		std::string* strings;
		int numString;
	public:
		StringSet();
		StringSet(const char* fileName);
		size_t size();
		std::string operator[](size_t);
	};
}

#endif