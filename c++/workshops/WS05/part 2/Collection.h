//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 5 - Functions and Error Handling
// Brody Neumann - June 26, 2021
#ifndef COLLECTION_H
#define COLLECTION_H
#include <string>
#include <iostream>

namespace sdds {
	template <typename T>
	class Collection {
		T* m_arr;
		std::string m_name;
		size_t m_arrSize;

		typedef void(*m_observer)(const Collection<T>&, const T&);
		m_observer obs = nullptr;
	public:
		Collection(const std::string& name) {
			m_name = name;
			m_arr = nullptr;
			m_arrSize = 0;
		}
		Collection(const Collection&) = delete;
		Collection& operator=(const Collection&) = delete;
		~Collection() {
			delete[] m_arr;
		}
		const std::string& name() const {
			return m_name;
		}
		size_t size() const {
			return m_arrSize;
		}
		void setObserver(void (*observer)(const Collection<T>&, const T&)) {
			obs = observer;
		}
		Collection<T>& operator+=(const T& item) {
			bool inArr = false;
			for (size_t i = 0; i < m_arrSize; i++)
				if (m_arr[i].title() == item.title()) inArr = true;
		
			if (!inArr) {
				T* copy = new T[m_arrSize + 1];
				for (size_t i = 0; i < m_arrSize; i++) copy[i] = m_arr[i];
				copy[m_arrSize] = item;
				m_arrSize++;

				delete[] m_arr;
				m_arr = std::move(copy);

				if (obs) obs(*this, item);
			}

			return *this;
		}
		T& operator[](size_t idx) const {
			if (idx < m_arrSize) return m_arr[idx];
			throw std::out_of_range("Bad index [" + std::to_string(idx) + "]. Collection has [" + std::to_string(m_arrSize) + "] items.");
		}
		T* operator[](const std::string& title) const {
			for (size_t i = 0; i < m_arrSize; i++) {
				if (m_arr[i].title() == title) return &m_arr[i];
			}

			return nullptr;
		}
	};

	template <typename T>
	std::ostream& operator<<(std::ostream& ostr, const sdds::Collection<T>& col) {
		for (size_t i = 0; i < col.size(); i++) 
			ostr << col.operator[](i);
		return ostr;
	}
}
#endif