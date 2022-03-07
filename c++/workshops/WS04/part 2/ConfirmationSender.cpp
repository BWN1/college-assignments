//I have done all the coding by myself and only copied the code that my professor provided to complete my workshops and assignments.
//June 18, 2021 - Brody Neumann
//June 20, 2021 - Brody Neumann
#include <iostream>
#include <iomanip>
#include "ConfirmationSender.h"

namespace sdds {
    ConfirmationSender::ConfirmationSender()
    {
        m_reservations = nullptr;
        m_arrSize = 0;
    }
    ConfirmationSender::~ConfirmationSender()
    {
        delete[] m_reservations;
    }
    ConfirmationSender::ConfirmationSender(const ConfirmationSender& cs)
    {
        if (this != &cs) {
            m_arrSize = cs.m_arrSize;
            m_reservations = new const Reservation*[m_arrSize];

            for (size_t i = 0; i < m_arrSize; i++) {
                m_reservations[i] = cs.m_reservations[i];
            }
        }
    }
    ConfirmationSender::ConfirmationSender(ConfirmationSender&& cs) noexcept
    {
        if (this != &cs) {
            m_arrSize = std::move(cs.m_arrSize);
            m_reservations = std::move(cs.m_reservations);

            cs.m_arrSize = 0;
            cs.m_reservations = nullptr;
        }
    }
    ConfirmationSender& ConfirmationSender::operator=(const ConfirmationSender& cs)
    {
        if (this != &cs) {
            delete[] m_reservations;

            m_arrSize = cs.m_arrSize;
            m_reservations = new const Reservation* [m_arrSize];

            for (size_t i = 0; i < m_arrSize; i++) {
                m_reservations[i] = cs.m_reservations[i];
            }
        }

        return *this;
    }
    ConfirmationSender& ConfirmationSender::operator=(ConfirmationSender&& cs) noexcept
    {
        if (this != &cs) {
            delete[] m_reservations;

            m_arrSize = std::move(cs.m_arrSize);
            m_reservations = std::move(cs.m_reservations);

            cs.m_arrSize = 0;
            cs.m_reservations = nullptr;
        }

        return *this;
    }
    ConfirmationSender& ConfirmationSender::operator+=(const Reservation& res)
    {
        bool inArr = false;

        for (size_t i = 0; i < m_arrSize; i++) {
            if (&res == m_reservations[i]) inArr = true;
        }

        if (inArr == false) {
            //To be moved to m_reservations
            const Reservation** copy = new const Reservation* [m_arrSize + 1];
            for (size_t i = 0; i < m_arrSize; i++) copy[i] = m_reservations[i];
            copy[m_arrSize] = &res;
            m_arrSize++;

            delete[] m_reservations;
            m_reservations = std::move(copy);
        }

        return *this;
    }

    ConfirmationSender& ConfirmationSender::operator-=(const Reservation& res)
    {
        size_t prevArrSize = m_arrSize;

        for (size_t i = 0; i < prevArrSize; i++) {
            if (&res == m_reservations[i]) {
                m_reservations[i] = nullptr;
                m_arrSize--;
            }
        }

        return *this;
    }

    std::ostream& operator<<(std::ostream& ostr, const ConfirmationSender& cs)
    {
        ostr << "--------------------------" << std::endl
            << "Confirmations to Send" << std::endl
            << "--------------------------" << std::endl;

        if (cs.m_arrSize == 0) {
            ostr << "There are no confirmations to send!" << std::endl;
        }
        else {
            for (size_t i = 0; i < cs.m_arrSize; i++) {
                if (cs.m_reservations[i] != nullptr) ostr << *cs.m_reservations[i];
            }
        }
        ostr << "--------------------------" << std::endl;

        return ostr;
    }

}
