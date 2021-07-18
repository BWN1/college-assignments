// Name: Brody Neumann
// Seneca Student ID: 134873207
// Seneca email: bneumann@myseneca.ca
// Date of completion: July 17, 2021
//
// I confirm that I am the only author of this file
// and the content was created entirely by me.
#include <iostream>
#include <iomanip>
#include "Station.h"
#include "Utilities.h"

namespace sdds {
	//Declare static variables
	size_t Station::m_widthField;
	size_t Station::id_generator;

	Station::Station()
	{
		m_id = 0;
		m_itemName = "";
		m_desc = "";
		m_serialNumber = 0;
		m_quantity = 0;
	}
	Station::Station(const std::string& str)
	{
		Utilities util;
		size_t next_pos = 0;
		bool more = true;

		m_itemName = util.extractToken(str, next_pos, more);
		m_serialNumber = stoi(util.extractToken(str, next_pos, more));
		m_quantity = stoi(util.extractToken(str, next_pos, more));

		if (m_widthField < util.getFieldWidth()) m_widthField = util.getFieldWidth();

		m_desc = util.extractToken(str, next_pos, more);

		m_id = ++id_generator;
	}
	const std::string& Station::getItemName() const
	{
		return m_itemName;
	}
	size_t Station::getNextSerialNumber()
	{
		m_serialNumber++;
		return m_serialNumber - 1;
	}
	size_t Station::getQuantity() const
	{
		return m_quantity;
	}
	void Station::updateQuantity()
	{
		if (m_quantity > 0) m_quantity--;
	}
	void Station::display(std::ostream& os, bool full) const
	{
		if (!full) {
			os << "[" << std::setw(3) << std::setfill('0') << std::right << m_id << "] Item: " << std::setw(m_widthField) << std::setfill(' ') << std::left << m_itemName << " [" << std::setw(6) << std::setfill('0') << std::right << m_serialNumber << "]" << std::endl;
		} //[ID] Item: NAME [SERIAL]
		else {
			os << "[" << std::setw(3) << std::setfill('0') << std::right << m_id << "] Item: " << std::setw(m_widthField) << std::setfill(' ') << std::left << m_itemName << " [" << std::setw(6) << std::setfill('0') << std::right << m_serialNumber << "] Quantity: " << std::setw(m_widthField) << std::setfill(' ') << std::left << m_quantity << " Description: " << m_desc << std::endl;
		} //[ID] Item NAME [SERIAL] Quantity: QTY Description: DESCRIPTION
	}
}