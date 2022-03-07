//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
#include <iostream>
#include "Restaurant.h"
static int callCnt;

namespace sdds {
	Restaurant::Restaurant()
	{
		m_reservations = nullptr;
		m_numReservations = 0;
	}

	Restaurant::Restaurant(const Reservation* reservations[], size_t cnt)
	{
		m_numReservations = cnt;
		m_reservations = new Reservation[m_numReservations];
		for (size_t i = 0; i < m_numReservations; i++) {
			m_reservations[i] = *reservations[i];
		}
	}
	
	Restaurant::Restaurant(const Restaurant& res)
	{
		if (this != &res)
		{
			m_numReservations = res.m_numReservations;
			m_reservations = new Reservation[m_numReservations];

			for (size_t i = 0; i < m_numReservations; i++) {
				m_reservations[i] = res.m_reservations[i];
			}
		}
	}
	
	Restaurant::Restaurant(Restaurant&& res) noexcept
	{
		if (this != &res) {
			m_numReservations = std::move(res.m_numReservations);
			m_reservations = std::move(res.m_reservations);

			res.m_numReservations = 0;
			res.m_reservations = nullptr;
		}
	}

	Restaurant::~Restaurant()
	{
		delete[] m_reservations;
	}
	
	size_t Restaurant::size() const
	{
		return m_numReservations;
	}
	
	Restaurant& Restaurant::operator=(const Restaurant& res)
	{
		if (this != &res) {
			delete[] m_reservations;

			m_numReservations = res.m_numReservations;
			m_reservations = new Reservation[m_numReservations];

			for (size_t i = 0; i < m_numReservations; i++) {
				m_reservations[i] = res.m_reservations[i];
			}
		}
		return *this;
	}
	
	Restaurant& Restaurant::operator=(Restaurant&& res) noexcept
	{
		if (this != &res) {
			m_numReservations = std::move(res.m_numReservations);
			m_reservations = std::move(res.m_reservations);

			res.m_numReservations = 0;
			res.m_reservations = nullptr;
		}

		return *this;
	}

	std::ostream& operator<<(std::ostream& ostr, const Restaurant& res)
	{
		callCnt++;
		ostr << "--------------------------" << std::endl
			<< "Fancy Restaurant (" << callCnt << ")" << std::endl
			<< "--------------------------" << std::endl;

		if (res.m_numReservations == 0) {
			ostr << "This restaurant is empty!" << std::endl;
		}
		else {
			for (size_t i = 0; i < res.m_numReservations; i++) {
				ostr << res.m_reservations[i];
			}
		}
		ostr << "--------------------------" << std::endl;

		return ostr;
	}
}

