//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
// Workshop 6 - STL Containers
//July 12, 2021 - Brody Neumann
#ifndef AUTOSHOP_H
#define AUTOSHOP_H
#include <vector>
#include <list>
#include "Vehicle.h"
namespace sdds {
	class Autoshop {
		std::vector<Vehicle*> m_vehicles;
	public:
		Autoshop& operator+=(Vehicle* theVehicle);
		void display(std::ostream& out) const;
		~Autoshop();

		template <typename T>
		void select(T test, std::list<const Vehicle*>& vehicles) {
			for (auto it = m_vehicles.begin(); it != m_vehicles.end(); it++) {
				if (test(*it)) {
					vehicles.push_back(*it);
				}
			}
		}
	};
}
#endif // !AUTOSHOP_H
