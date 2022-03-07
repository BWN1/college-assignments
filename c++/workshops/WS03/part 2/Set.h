//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 3 - Templates
// Brody Neumann - June 7, 2021
// Brody Neumann - June 11, 2021 - Forgot "unsigned" for N in template
#ifndef SET_H
#define SET_H
namespace sdds {
	template<unsigned int N, typename T>
	class Set {
		T arr[N];
		size_t numElems = 0;
		size_t capacity = N;
	public:
		size_t size() const { return numElems; }
		const T& get(size_t idx) const { return arr[idx]; }
		void operator+=(const T& item) { 
			if (numElems < capacity) {
				arr[numElems] = item;
				numElems++;
			}
		}
	};
}
#endif