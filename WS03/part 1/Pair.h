//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
#ifndef PAIR_H
#define PAIR_H
#include <iostream>
namespace sdds {
	template<typename V, typename K>
	class Pair {
		V m_value;
		K m_key;
	public:
		Pair() {}
		Pair(const K& key, const V& value) {
			m_value = value;
			m_key = key;
		}
		const V& value() const { return m_value; }
		const K& key() const { return m_key; }
		void display(std::ostream& os) const {
			os << m_key << " : " << m_value << std::endl;
		}
	};

	template<typename V, typename K>
	std::ostream& operator<<(std::ostream& os, const Pair<V, K>& pair) {
		pair.display(os);
		return os;
	}
}
#endif