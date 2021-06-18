//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
#ifndef RESTAURANT_H
#define RESTAURANT_H
#include "Reservation.h"
namespace sdds {
	class Restaurant {
		Reservation* m_reservations;
		size_t m_numReservations;
	public:
		Restaurant() {};
		Restaurant(const Reservation* reservations[], size_t cnt);
		Restaurant(const Restaurant& res);
		Restaurant(Restaurant&& res) noexcept;
		~Restaurant();
		size_t size() const;
		Restaurant& operator=(const Restaurant& res);
		Restaurant& operator=(Restaurant&& res) noexcept;
		friend std::ostream& operator<<(std::ostream& ostr, const Restaurant& res);
	};
}

#endif