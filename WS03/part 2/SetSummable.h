//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
#ifndef SETSUMMABLE_H
#define SETSUMMABLE_H
#include "Set.h"
namespace sdds {
	template <unsigned int N, typename T>
	class SetSummable : public Set<N, T> {
		std::string m_filter;
	public:
		SetSummable() {}
		SetSummable(std::string filter) {
			m_filter = filter;
		}

		template<typename T>
		bool isCompatibleWith(const T& obj) const {
			return m_filter == obj.key();
		}

		T& operator+=(const T& obj) {
			*this += obj;
			return this;
		}

		T accumulate(const std::string& filter) const {
			T accumulator(filter);
			for (size_t i = 0; i < Set::size(); i++) {
				if (accumulator.isCompatibleWith(accumulator)) {

				}
			}
			return accumulator;
		}
	};
}
#endif