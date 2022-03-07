//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
// Brody Neumann - June 11, 2021
// Brody Neumann - June 12, 2021
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
		PairSummable() {}
		PairSummable(const K& key, const V& value = initValue) : Pair<V, K>(key, value) {
			if (key.size() > minWidth) minWidth = key.size();
		}
		bool isCompatibleWith(const PairSummable<V, K>& b) const {
			return b.key() == this->key();
		}

		PairSummable<V, K>& operator+=(const PairSummable& item) {
			*this = PairSummable<V, K>(item.key(), this->value() + item.value());
			return *this;
		}
		void display(std::ostream& os) const {
			os.unsetf(std::ios::right);
			os.setf(std::ios::left);
			os.width(minWidth);
			os.fill(' ');
			Pair<V, K>::display(os);
			os.setf(std::ios::right);
		}
	};
	
	template <>
	PairSummable<std::string, std::string>& PairSummable<std::string, std::string>::operator+=(const PairSummable<std::string, std::string>& item) {
		if (this->value() != "") {
			*this = PairSummable<std::string, std::string>(item.key(), this->value() + ", " + item.value());
		}
		else {
			*this = PairSummable<std::string, std::string>(item.key(), item.value());
		}
		return *this;
	}

	//Delcare static member variables
	template<typename V, typename K> V PairSummable<V, K>::initValue;
	template<typename V, typename K> size_t PairSummable<V, K>::minWidth;
}
#endif