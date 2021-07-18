// Name: Brody Neumann
// Seneca Student ID: 134873207
// Seneca email: bneumann@myseneca.ca
// Date of completion: July 17, 2021
//
// I confirm that I am the only author of this file
// and the content was created entirely by me.
#ifndef STATION_H
#define STATION_H
#include <string>
namespace sdds {
	class Station {
		int m_id;
		std::string m_itemName;
		std::string m_desc;
		size_t m_serialNumber;
		size_t m_quantity;
		static size_t m_widthField;
		static size_t id_generator;
	public:
		Station();
		Station(const std::string& str);
		const std::string& getItemName() const;
		size_t getNextSerialNumber();
		size_t getQuantity() const;
		void updateQuantity();
		void display(std::ostream& os, bool full) const;
	};
}
#endif // !STATION_H
