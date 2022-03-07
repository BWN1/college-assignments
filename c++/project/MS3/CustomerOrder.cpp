// Name: Brody Neumann
// Seneca Student ID: 134873207
// Seneca email: bneumann@myseneca.ca
// Date of completion: July 27, 2021
//
// I confirm that I am the only author of this file
// and the content was created entirely by me.
#include <iostream>
#include <iomanip>
#include <algorithm>
#include "CustomerOrder.h"
#include "Utilities.h"

namespace sdds {
	//Declare static variables
	size_t CustomerOrder::m_widthField;

	CustomerOrder::CustomerOrder()
	{
		m_name = "";
		m_product = "";
		m_cntItem = 0;
		m_lstItem = nullptr;
	}
	CustomerOrder::CustomerOrder(const std::string str)
	{
		Utilities util;
		size_t firstItem, next_pos = 0;
		bool more = true;
		std::string temp;

		m_name = util.extractToken(str, next_pos, more);
		m_product = util.extractToken(str, next_pos, more);
		
		//Count number of items in str
		firstItem = next_pos;
		m_cntItem = 0;
		while (more) {
			util.extractToken(str, next_pos, more);
			m_cntItem++;
		}

		//Add items to m_lstItem
		m_lstItem = new Item * [m_cntItem];
		more = true;
		for (size_t i = 0; i < m_cntItem; i++) {
			m_lstItem[i] = new Item(util.extractToken(str, firstItem, more));
		}

		if (m_widthField < util.getFieldWidth()) m_widthField = util.getFieldWidth();
	}
	CustomerOrder::CustomerOrder(CustomerOrder&& co) noexcept
	{
		if (this != &co) {
			//Move
			m_name = std::move(co.m_name);
			m_product = std::move(co.m_product);
			m_cntItem = std::move(co.m_cntItem);
			m_lstItem = std::move(co.m_lstItem);

			//Set arg to empty
			co.m_name = "";
			co.m_product = "";
			co.m_cntItem = 0;
			co.m_lstItem = nullptr;
		}
	}
	CustomerOrder& CustomerOrder::operator=(CustomerOrder&& co) noexcept
	{
		if (this != &co) {
			//Free array
			if (m_lstItem) {
				for (size_t i = 0; i < m_cntItem; i++) {
					delete m_lstItem[i];
				}
				delete[] m_lstItem;
			}

			//Move
			m_name = std::move(co.m_name);
			m_product = std::move(co.m_product);
			m_cntItem = std::move(co.m_cntItem);
			m_lstItem = std::move(co.m_lstItem);

			//Set arg to empty
			co.m_name = "";
			co.m_product = "";
			co.m_cntItem = 0;
			co.m_lstItem = nullptr;
		}

		return *this;
	}
	CustomerOrder::~CustomerOrder()
	{
		for (size_t i = 0; i < m_cntItem; i++) {
			delete m_lstItem[i];
		}
		delete[] m_lstItem;
	}
	bool CustomerOrder::isFilled() const
	{
		bool filled = true;
		std::for_each(m_lstItem, (m_lstItem + m_cntItem), [&filled](const Item* item) {
			if (!item->m_isFilled) filled =  false;
		});
		return filled;
	}
	bool CustomerOrder::isItemFilled(const std::string& itemName) const
	{
		bool filled = true;
		std::for_each(m_lstItem, (m_lstItem + m_cntItem), [itemName, &filled](const Item* item) {
			if (item->m_itemName == itemName && !item->m_isFilled) filled = false;
		});
		return filled;
	}
	void CustomerOrder::fillItem(Station& station, std::ostream& os)
	{
		std::for_each(m_lstItem, (m_lstItem + m_cntItem), [&](Item* &item) {
			if (item->m_itemName == station.getItemName()) {
				if (station.getQuantity() >= 1) {
					station.updateQuantity();
					item->m_serialNumber = station.getNextSerialNumber();
					item->m_isFilled = true;

					os << "    Filled " << m_name << ", " << m_product << " [" << item->m_itemName << "]" << std::endl;
				}
				else os << "    Unable to fill " << m_name << ", " << m_product << " [" << item->m_itemName << "]" << std::endl;
			}
		});
	}
	void CustomerOrder::display(std::ostream& os) const
	{
		os << m_name << " - " << m_product << std::endl;

		std::for_each(m_lstItem, (m_lstItem + m_cntItem), [&os](const Item* item) {
			os << "[" << std::setw(6) << std::right << std::setfill('0') << item->m_serialNumber << "] "
				<< std::setw(m_widthField) << std::left << std::setfill(' ') << item->m_itemName << " - "
				<< (item->m_isFilled ? "FILLED" : "TO BE FILLED") << std::endl;
		});
	}
}
