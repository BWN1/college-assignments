//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
#ifndef PARISUMMABLE_H
#define PARISUMMABLE_H
#include <iostream>
#include "Pair.h"
namespace sdds {
	template<typename V, typename K>
	class PairSummable : public Pair<V, K> {
		static V initValue;
		static size_t minWidth;
	public:
		PairSummable() {};
		PairSummable(const K& key, const V& value = initValue) : Pair<V, K>(key, value) {
			minWidth = 0;
			if (key.size() != minWidth) minWidth = key.size();
		}
		bool isCompatibleWith(const PairSummable<V, K>& b) const {
			return b.key() == Pair<V, K>::key();
		}

		template <typename V, typename K>
		PairSummable<V, K>& operator+=(const PairSummable& item) {
			initValue = initValue + item.initValue;
			return *this;
		}
		template<>
		PairSummable<std::string, std::string>& operator+=(const PairSummable<V, K>& b) {
			this->initValue() = b->initValue() + ", " + this->initValue();
			return *this;
		}
		
		void display(std::ostream& os) const {
			os.setf(std::ios::left);
			os.width(minWidth);
			Pair::display(os);
			os.setf(std::ios::right);
		}
	};
}
#endif