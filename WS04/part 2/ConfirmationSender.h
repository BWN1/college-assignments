//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
#ifndef CONFIRMATIONSENDER_H
#define CONFIRMATIONSENDER_H
#include "Reservation.h"
namespace sdds {
	class ConfirmationSender {
		const sdds::Reservation** m_reservations;
	public:
		ConfirmationSender& operator+=(const Reservation& res);
		ConfirmationSender& operator-=(const Reservation& res);
	};
}

#endif

