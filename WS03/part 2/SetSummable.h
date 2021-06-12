//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
// Brody Neumann - June 11, 2021
// Brody Neumann - June 12, 2021
#ifndef SETSUMMABLE_H
#define SETSUMMABLE_H
#include "Set.h"
namespace sdds {
	template <unsigned int N, typename T>
	class SetSummable : public Set<N, T> {
	public:
		SetSummable() {}
		T accumulate(const std::string& filter) const {
			T accumulator(filter);
			for (size_t i = 0; i < this->size(); i++) {
				if (accumulator.isCompatibleWith(this->get(i))) {
					accumulator += this->get(i);
				}
			}
			return accumulator;
		}
	};
}
#endif